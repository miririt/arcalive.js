const url = require('url');
const { ArgumentError } = require('./errors');

/**
 * 새 댓글 객체 Comment를 만든다.
 * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
 * @constructor
 * 
 * @param {Article} article 해당 댓글이 속해있는 게시글 객체
 * @param {Comment.CommentData} commentData 댓글 정보
 * @param {number} [commentData.commentId] 댓글 번호(주어지지 않을 경우 url 혹은 apiUrl을 통해 생성함)
 * @param {URL} [commentData.apiUrl] 댓글 API 호출시 필요한 URL(주어지지 않을 경우 commentId 혹은 url을 통해 생성함)
 * @param {URL} [commentData.url] 댓글 URL(주어지지 않을 경우 commentId 혹은 apiUrl을 통해 생성함)
 */
function Comment(article, commentData) {
  this._session = article._session;
  this._article = article;

  if(commentData.commentId) {
    this.commentId = commentData.commentId;  
    this.apiUrl = new URL(`${this._article.url}/${this.commentId}`);
    this.url = new URL(`${this._article.url}#c_${this.commentId}`);
  } else if(commentData.apiUrl) {
    this.commentId = +commentData.apiUrl.pathname.match(/^\/b\/[^/]+\/\d+\/(\d+)/)[1];
    this.apiUrl = commentData.apiUrl;
    this.url = new URL(`${this._article.url}#c_${this.commentId}`);
  } else if(commentData.url) {
    this.commentId = +commentData.url.hash.match(/^#c_(\d+)/)[1];
    this.apiUrl = new URL(`${this._article.url}/${this.commentId}`);
    this.url = commentData.url;
  } else {
    throw new ArgumentError('at least one of { commentId, apiUrl, url } must have specified');
  }

  if(commentData instanceof Comment.CommentData) {
    this._commentData = commentData;
  } else {
    this._commentData = new Comment.CommentData();
    for(const key in commentData) {
      this._commentData[key] = commentData[key];
    }
  }

  this._commentData._freezeThis();
}

/**
 * 새 댓글 정보 객체 ArticleData를 만든다.
 * @constructor
 * 
 * @param {Object} data 댓글 정보
 * @param {number} [data.commentId] 댓글 번호
 * @param {string} [data.author] 댓글 작성자
 * @param {string} [data.content] 댓글 내용(HTML)
 * @param {string} [data.textContent] 댓글 내용(텍스트)
 * @param {Date} [data.time] 댓글 작성 시각
 */
Comment.CommentData = function(data = {
  commentId: 0,
  author: null,
  content: null,
  textContent: null,
  time: null
}) {
  this.commentId = data.commentId;
  this.author = data.author;
  this.content = data.content;
  this.textContent = data.textContent;
  this.time = data.time;
}

/**
 * CommentData를 고정한다.
 * Comment 생성 후 값을 변경하지 않도록 호출해 줌.
 * 
 * @returns {Comment.CommentData} 해당 CommentData의 freeze된 사본
 */
Comment.CommentData.prototype._freezeThis = function() {
  return Object.freeze(this);
}

/**
 * 해당 댓글을 읽는다.
 * 
 * @returns {Comment.CommentData} 댓글 정보
 */
Comment.prototype.read = async function() {
  return this._commentData;
}

/**
 * 해당 댓글을 삭제한다.
 * 
 * @returns {Promise<Response>} 댓글 작성 fetch에 대한 Response
 */
Comment.prototype.delete = async function() {
  const body = new url.URLSearchParams();

  if(this._session._anonymous) {
    body.append('password', this._session.password);
  }

  return await this._session._fetch(`${this.apiUrl}/delete`, {
    method: 'POST',
    body: body,
    csrfRequired: true,
    parse: false
  });
}

/**
 * 해당 게시글에 작성된 댓글을 수정한다.
 * 수정하더라도 commentData는 수정되지 않는다.
 * 
 * @param {number} commentId 댓글 번호
 * @param {string} comment 댓글 내용(HTML)
 * @returns {Promise<Response>} 댓글 수정 fetch에 대한 Response
 */
Comment.prototype.edit = async function(content) {
  if(this._session._anonymous) {
    body.append('password', this._session.password);
  }

  const body = new url.URLSearchParams();

  body.append('contentType', 'text');
  body.append('content', content);

  return await this._session._fetch(`${this.apiUrl}/edit`, {
    method: 'POST',
    headers: { referer: this.url },
    body: body,
    csrfRequired: true
  });
}

module.exports = Comment;