const url = require('url');
const Comment = require('./comment');
const { ArgumentError, SessionError } = require('./errors');

/**
 * 새 게시글 객체 Article을 만든다.
 * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
 * @constructor
 * 
 * @param {Board} board 해당 게시글이 속해 있는 게시판 객체
 * @param {Object|Article.ArticleData} articleData 게시글 정보
 * @param {number} [articleData.articleId] 게시글 번호(주어지지 않을 경우 url를 통해 생성함)
 * @param {URL} [articleData.url] 게시글 URL(주어지지 않을 경우 articleId를 통해 생성함)
 */
function Article(board, articleData) {
  if(!board._session) {
    throw new SessionError('Invalid board session');
  }

  this._session = board._session;
  this._board = board;

  if(articleData.articleId) {
    this.articleId = articleData.articleId;
    this.url = new url.URL(`${board.url}/${articleData.articleId}`);
  } else if(articleData.url) {
    this.articleId = +articleData.url.pathname.match(/^\/b\/[^/]+\/(\d+)/)[1];
    this.url = articleData.url;
  } else {
    throw new ArgumentError('at least one of { articleId, url } must have specified');
  }

  this._loaded = false;
  
  if(articleData instanceof Article.ArticleData) {
    this._articleData = articleData;
  } else {
    this._articleData = new Article.ArticleData();
    for(const key in articleData) {
      this._articleData[key] = articleData[key];
    }
  }
}

/**
 * 새 게시글 정보 객체 ArticleData를 만든다.
 * @constructor
 * 
 * @param {Object} data 게시글 정보
 * @param {boolean} data.isSummary true일 경우 해당 정보는 read()를 통해 얻어온 정보, false일 경우 readPage()를 통해 얻어온 요약 정보
 * @param {number} [data.articleId] 게시글 번호
 * @param {string} [data.category] 게시글 분류
 * @param {string} [data.title] 게시글 제목
 * @param {string} [data.content] 게시글 내용
 * @param {Date} [data.time] 게시글 작성 시각
 * @param {number} [data.view] 게시글 조회수
 * @param {Comment[]} [data.comments] 게시글 댓글 목록
 * @param {number} [data.commentCount] 게시글 댓글수
 * @param {number[]} [data.rate] 게시글 추천 수와 비추천 수
 * @param {number} [data.rateDiff] 게시글 추천 수 - 비추천 수
 */
Article.ArticleData = function(data = {
  isSummary: true,
  articleId: 0,
  category: null,
  title: null,
  content: null,
  time: 0,
  views: 0,
  comments: [],
  commentCount: 0,
  rate: [0, 0],
  rateDiff: 0
}) {
  this.isSummary = data.isSummary;
  this.articleId = data.articleId;
  this.category = data.category;
  this.title = data.title;
  this.content = data.content;
  this.time = data.time;
  this.views = data.views;
  this.comments = data.comments;
  this.commentCount = data.commentCount;
  this.rate = data.rate;
  this.rateDiff = data.rateDiff;
}

/**
 * ArticleData를 고정한다.
 * Article.read() 수행 후 값을 변경하지 않도록 호출해 줌.
 * 
 * @returns {Article.ArticleData} 해당 ArticleData의 freeze된 사본
 */
Article.ArticleData.prototype._freezeThis = function() {
  return Object.freeze(this);
}

/**
 * 해당 게시글을 fetch한다.
 * 만일 이미 읽어온 게시글일 경우, fetch 없이 정보를 그대로 반환한다.
 * 
 * @param {Object} options 게시글 읽기 옵션
 * @param {boolean} options.noCache true일 경우 저장된 정보를 무시하고 무조건 fetch함
 * @param {boolean} options.withComments true일 경우 게시글에 작성된 모든 댓글을 추가로 fetch함
 * @returns {Promise<Article.ArticleData>} 해당 게시글의 articleData 사본
 */
Article.prototype.read = async function(options = {
  noCache: false,
  withComments: true
}) {
  if(options.noCache || (!this._loaded || !this._articleData)) {
    const article = await this._session._fetch(`${this._board.url}/${this.articleId}`);

    const articleTitle = article.querySelector('.article-wrapper .title');
    const badge = articleTitle.querySelector('span.badge');

    const articleInfo = article.querySelector('.article-info');
    const [ rateUp, rateDown, commentCount, views, time ] = articleInfo.querySelectorAll('.body');

    this._articleData = new Article.ArticleData();

    if(badge !== null) {
      this._articleData.category = badge.innerText;
      this._articleData.title = articleTitle.innerText.replace(this._articleData.category, '');
    } else {
      this._articleData.category = null;
      this._articleData.title = articleTitle.innerText;
    }

    this._articleData.title = this._articleData.title.replace(/\n/g, '');

    this._articleData.time = new Date(time.querySelector('time').attributes.datetime);
    this._articleData.views = +views.innerText;
    this._articleData.commentCount = +commentCount.innerText;
    this._articleData.rate = [ +rateUp.innerText, +rateDown.innerText ];
    this._articleData.rateDiff = this._articleData.rate[0] - this._articleData.rate[1];

    this._articleData.content = article.querySelector('.article-wrapper .article-body .article-content').innerHTML;

    if(options.withComments) {
      this._articleData.comments = [];

      const commentLink = article.querySelector('.article-comment .page-item.active a');
      const lastCommentPage = commentLink ? +commentLink.innerText : 1;
      for(let i = lastCommentPage; i >= 1; i--) {
        const commentPage = await this._session._fetch(`${this._board.url}/${this.articleId}?cp=${i}`);
        const comments = commentPage.querySelectorAll('.comment-wrapper');

        this._articleData.comments.push(...comments.map(comment => {
          const userInfo = comment.querySelector('span.user-info');
          const userLink = userInfo.querySelector('a') || userInfo.querySelector('span');

          const message = comment.querySelector('.message');
          const content = comment.querySelector('div').innerHTML;
          let textContent;

          if(message.querySelector('.emoticon-wrapper')) {
            textContent = message.querySelector('.emoticon-wrapper').attributes.src || '';
          } else if(message.querySelector('.text')) {
            textContent = message.querySelector('.text pre').textContent || '';
          }

          return new Comment(this, {
            commentId: +comment.id.match(/(\d+)$/)[1],
            deleted: comment.querySelector('.deleted') ? true : false,
            author: userLink.attributes['data-filter'],
            content: content,
            textContent: textContent,
            time: new Date(comment.querySelector('time').attributes.datetime)
          });
        }));
      }
    }
  }

  return this._articleData._freezeThis();
}

/**
 * 해당 게시글을 삭제한다.
 * 
 * @returns {Promise<Response>} 삭제 fetch에 대한 Response
 */
Article.prototype.delete = async function() {

  const body = new url.URLSearchParams();

  if(this._session._anonymous) {
    body.append('password', this._session.password);
  }

  return await this._session._fetch(`${this._board.url}/${this.articleId}/delete`, {
    method: 'POST',
    body: body,
    csrfRequired: true,
    parse: false
  });
}

/**
 * 해당 게시글을 수정한다.
 * 
 * @param {Object} article 수정될 내용(지정되지 않은 property는 현재의 값을 그대로 가지고 감)
 * @param {string} [article.category] 게시글 분류
 * @param {string} [article.title] 게시글 제목
 * @param {string} [article.content] 게시글 내용
 * @returns {Promise<Response>} 수정 fetch에 대한 Response
 */
Article.prototype.edit = async function(article = {
  category: null,
  title: '',
  content: ''
}) {
  if(this._session._anonymous) {
    article.anonymous = true;
    if(!article.nickname) {
      article.nickname = this._session._username;
    }
    if(!article.password) {
      article.password = this._session._password;
    }
  }

  if('undefined' === typeof article.category) {
    article.category = this._articleData.category;
  }
  if('undefined' === typeof article.title) {
    article.title = this._articleData.title;
  }
  if('undefined' === typeof article.content) {
    article.content = this._articleData.content;
  }

  const editPage = await this._session._fetch(`${this.url}/edit`);

  const tokens = {};

  const inputElements = editPage.querySelectorAll('#article_write_form input');
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
  articleInfo.append('agreePreventDelete', 'on');
  articleInfo.append('title', article.title);
  articleInfo.append('content', article.content);

  if(article.anonymous) {
    articleInfo.append('nickname', article.nickname);
    articleInfo.append('password', article.password);
  }

  return await this._session._fetch(`${this.url}/edit`, {
    method: 'POST',
    headers: { referer: `${this.url}/write` },
    body: articleInfo,
    parse: false
  });
}

/**
 * 해당 게시글의 작성자를 차단한다.
 * 
 * @param {number} duration 차단 기간(단위 : 초)
 * @returns {Promise<Response>} 차단 fetch에 대한 Response
 */
Article.prototype.blockUser = async function(duration) {
  const body = new url.URLSearchParams();
  body.append('until', duration);

  return await this._session._fetch(`${this._board.url}/block/article/${this.articleId}`, {
    method: 'POST',
    headers: { referer: this.url },
    body: body,
    parse: false
  });
}

/**
 * 해당 게시글을 볼 수 없는 국가를 설정한다.
 * 
 * @param {string[]} countries 제한 국가 목록
 * @returns {Promise<Response>} 국가 제한 fetch에 대한 Response
 */
Article.prototype.restrictCountry = async function(...countries) {
  const body = new url.URLSearchParams();
  body.append('restricted_countries[]', '');
  countries.forEach(country => {
    body.append('restricted_countries[]', country);
  });

  return await this._session._fetch(`${this.url}/config`, {
    method: 'POST',
    headers: { referer: this.url },
    body: body,
    parse: false,
    csrfRequired: true,
    parse: false
  });
}

/**
 * 해당 게시글에 새 댓글을 작성한다.
 * 작성하더라도 articleData에는 추가되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
 * 
 * @param {string} comment 댓글 내용(HTML)
 * @returns {Promise<Comment>} 댓글 작성 fetch에 대한 Response
 */
Article.prototype.writeComment = async function(comment) {
  if(this._session._anonymous) {
    throw new SessionError('This is an anonymous session(anonymous session requires reCAPTCHA auth).');
  }

  const body = new url.URLSearchParams();
  body.append('contentType', 'text');
  body.append('content', comment);
  
  const response = await this._session._fetch(`${this.url}/comment`, {
    method: 'POST',
    headers: { referer: this.url },
    body: body,
    csrfRequired: true,
    parse: false
  });

  return new Comment(this, {
    url: new URL(response.url)
  });
}

/**
 * 해당 게시글에서 댓글을 삭제한다.
 * 삭제하더라도 articleData에서는 삭제되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
 * 
 * @param {number} commentId 댓글 번호
 * @returns {Promise<Response>} 댓글 작성 fetch에 대한 Response
 */
Article.prototype.deleteComment = function(commentId) {
  const commentObject = this._articleData.comments[commentId] || new Comment(this, {
    commentId: commentId
  });

  return commentObject.delete();
}

/**
 * 해당 게시글에 작성된 댓글을 수정한다.
 * 수정하더라도 articleData에는 수정되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다.
 * 
 * @param {number} commentId 댓글 번호
 * @param {string} comment 댓글 내용(HTML)
 * @returns {Promise<Response>} 댓글 수정 fetch에 대한 Response
 */
Article.prototype.editComment = function(commentId, comment) {
  const commentObject = this._articleData.comments[commentId] || new Comment(this, {
    commentId: commentId
  });

  return commentObject.edit(comment);
}

module.exports = Article;