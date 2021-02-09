const url = require('url');
const Article = require('./article');

/**
 * 새 게시판 객체 Board를 만든다.
 * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
 * 
 * @param {RequestSession} session 게시판을 열람할 세션
 * @param {Object} boardData 게시판 정보
 * @param {URL} boardData.url 게시판 URL
 */
function Board(session, boardData) {
  this._session = session;
  this.url = boardData.url;

  this._cachedArticles = {};
}

/**
 * 해당 게시판에 있는 게시글의 객체 Article을 얻어온다.
 * 실제 존재 여부와 관계 없이 무조건 반환한다.
 * 
 * @param {number} articleId 게시글 번호
 * @returns {Article} 해당 번호의 게시글을 나타내는 Article 객체
 */
Board.prototype.getArticle = function(articleId) {
  const articleObject = this._cachedArticles[articleId] || (this._cachedArticles[articleId] = new Article(this, { articleId: articleId }));

  return articleObject;
}

/**
 * 해당 게시판에 있는 게시글의 객체 Article을 읽는다.
 * 존재하지 않을 경우 실패한다.
 * 
 * @param {number} articleId 게시글 번호
 * @param {Object} options 게시글 읽기 옵션
 * @param {boolean} options.noCache true일 경우 저장된 정보를 무시하고 무조건 fetch함
 * @param {boolean} options.withComments true일 경우 게시글에 작성된 모든 댓글을 추가로 fetch함
 * @returns {Article} 해당 번호의 게시글을 나타내는 Article 객체
 */
Board.prototype.readArticle = function(articleId, options) {
  const articleObject = this._cachedArticles[articleId] || (this._cachedArticles[articleId] = new Article(this, { articleId: articleId }));

  return articleObject.read(options);
}

/**
 * 해당 게시판에 새 글을 작성한다.
 * 
 * @param {Object} article 게시글 내용
 * @param {string} [article.category] 게시글 분류
 * @param {string} [article.title] 게시글 제목
 * @param {string} [article.content] 게시글 내용
 * @returns {Promise<Response>} 게시글 작성 fetch에 대한 Response
 */
Board.prototype.writeArticle = async function(article) {
  if(this._session._anonymous) {
    throw new Error('This is an anonymous session(anonymous session requires reCAPTCHA auth).');
  }

  const writePage = await this._session._fetch(`${this.url}/write`);

  const tokens = {};

  const inputElements = writePage.querySelectorAll('#article_write_form input');
  for(const key in inputElements) {
    if(inputElements[key].attributes.name == '_csrf') {
      tokens.csrf = inputElements[key].attributes.value;
    }
    if(inputElements[key].attributes.name == 'token') {
      tokens.token = inputElements[key].attributes.value;
    }
  }

  const articleInfo = new url.URLSearchParams();
  articleInfo.append('_csrf', tokens.csrf);
  articleInfo.append('token', tokens.token);
  articleInfo.append('contentType', 'html');
  articleInfo.append('category', article.category);
  articleInfo.append('title', article.title);
  articleInfo.append('content', article.content);

  if(article.anonymous) {
    articleInfo.append('nickname', article.nickname);
    articleInfo.append('password', article.password);
  }

  return await this._session._fetch(`${this.url}/write`, {
    method: 'POST',
    headers: { referer: `${this.url}/write` },
    body: articleInfo
  });
}

/**
 * 해당 게시판에서 글을 삭제한다.
 * 
 * @param {number} articleId 게시글 번호
 * @returns {Promise<Response>} 게시글 삭제 fetch에 대한 Response
 */
Board.prototype.deleteArticle = function(articleId) {
  const articleObject = this._cachedArticles[articleId] || (this._cachedArticles[articleId] = new Article(this, { articleId: articleId }));
  
  return articleObject.delete();
}

/**
 * 해당 게시판에서 글을 수정한다.
 * 
 * @param {number} articleId 게시글 번호
 * @param {Object} article 수정될 내용(지정되지 않은 property는 현재의 값을 그대로 가지고 감)
 * @param {string} [article.category] 게시글 분류
 * @param {string} [article.title] 게시글 제목
 * @param {string} [article.content] 게시글 내용
 * @returns {Promise<Response>} 게시글 수정 fetch에 대한 Response
 */
Board.prototype.editArticle = async function(articleId, article) {
  const articleObject = this._cachedArticles[articleId] || (this._cachedArticles[articleId] = new Article(this, { articleId: articleId }));

  return articleObject.edit(article);
}

/**
 * 해당 게시판에서 글을 검색한다.
 * 
 * @param {number} page 검색 결과 페이지 번호
 * @param {Object} options 검색 옵션
 * @param {boolean} options.withNotices true일 경우 상단의 공지글을 포함해 반환함
 * @param {string} [options.queryTarget='all'|'title_conent'|title'|'content'|'nickname'|'comment'] 검색
 * @param {string} [options.queryString] 검색 내용
 * @param {string} [options.category] 검색할 분류
 * @returns {Promise<Article[]>} 해당 페이지에 있는 게시글 검색 결과를 나타내는 Article[]
 */
Board.prototype.queryPage = async function(page = 1, options = {}) {

  let queryUrl = `${this.url}`;
  queryUrl += `?p=${page}`;
  if(options.queryTarget && options.queryString) {
    queryUrl += `&target=${options.queryTarget}&keyword=${options.queryString}`;
  }
  if(options.category) {
    queryUrl += `&category=${options.category}`;
  }

  const boardPage = await this._session._fetch(queryUrl);

  const articles = boardPage.querySelectorAll('.article-list a.vrow');

  let filteredArticles = articles.filter(article => article.classNames.indexOf('notice-unfilter') === -1);

  if(!options.withNotices) {
    filteredArticles = articles.filter(article => article.classNames.indexOf('notice') === -1);
  }

  return filteredArticles.map(articleElem => {
    const articleData = {
      articleId: 0,
      isNotice: false,
      category: null,
      title: null,
      time: 0,
      views: 0,
      commentCount: 0,
      rateDiff: 0
    };

    const commentElement = articleElem.querySelector('.comment-count');

    articleData.articleId = +articleElem.attributes.href.match(/(\d+)[?]p=(\d+)$/)[1];
    articleData.isNotice = articleElem.classNames.indexOf('notice') !== -1;
    articleData.category = articleElem.querySelector('.badge').innerText;
    articleData.title = articleElem.querySelector('.title').innerText.replace(/\n/g, '');

    articleData.time = new Date(articleElem.querySelector('.col-time time').attributes.datetime);
    articleData.views = +articleElem.querySelector('.col-view').innerText;
    articleData.commentCount = commentElement ? +commentElement.innerText.match(/\d+/)[0] : 0;
    articleData.rateDiff = +articleElem.querySelector('.col-rate').innerText;

    return new Article(this, articleData);
  });
}

/**
 * 해당 게시판의 페이지를 얻어온다.
 * 내부적으로 queryPage를 호출한다.
 * 
 * @param {number} page 페이지 번호
 * @param {Object} options 검색 옵션
 * @param {boolean} options.withNotices true일 경우 상단의 공지글을 포함해 반환함
 * @param {string} [options.category] 게시글 분류
 * @returns {Promise<Article[]>} 해당 게시글 분류의 해당 페이지에 있는 게시글을 나타내는 Article[]
 */
Board.prototype.readPage = function(page, options) {
  return this.queryPage(page, options);
}

module.exports = Board;