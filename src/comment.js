const url = require('url');

/**
 * 새 댓글 객체 Comment를 만든다.
 * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
 * 
 * @param {Article} article 해당 댓글이 속해있는 게시글 객체
 * @param {Object} commentData 댓글 정보
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
    throw new Error('at least one of { commentId, apiUrl, url } must have specified');
  }

  this._commentData = commentData;
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