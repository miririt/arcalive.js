const url = require('url');

/**
 * 새 댓글 객체 Comment를 만든다.
 * 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).
 * 
 * @param {Article} article 해당 댓글이 속해있는 게시글 객체
 * @param {Object} commentData 댓글 정보
 * @param {number} commentData.commentId 댓글 번호
 */
function Comment(article, commentData) {
  this._session = article._session;
  this._article = article;

  this.commentId = commentData.commentId;
  this._apiUrl = new URL(`${this._article.url}/${this.commentId}`);
  this.url = new URL(`${this._article.url}#c_${this.commentId}`);

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

  return await this._session._fetch(`${this._apiUrl}/delete`, {
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

  return await this._session._fetch(`${this._apiUrl}/edit`, {
    method: 'POST',
    headers: { referer: this.url },
    body: body,
    csrfRequired: true
  });
}

module.exports = Comment;