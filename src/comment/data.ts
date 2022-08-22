import ParceledData from "../classes/parcel.js";

type CommentData = {
  /** @property {number} 댓글 번호 */
  commentId?: number;
  /** @property {string} 댓글 작성자 */
  author?: string;
  /** @property {string} 댓글 내용(HTML) */
  content?: string;
  /** @property {string} 댓글 내용(텍스트) */
  textContent?: string;
  /** @property {Date} 댓글 작성 시각 */
  time?: Date;
  /** @property {URL} 댓글 URL */
  url: URL;
  /** @property {URL} 이 댓글에 대한 API 접근을 위한 URL */
  apiUrl: URL;
  /** @property {boolean} 이미 삭제된 댓글인지 여부 */
  deleted?: boolean;
};

class ParceledCommentData extends ParceledData<CommentData> {}

export type { CommentData };
export { ParceledCommentData };
