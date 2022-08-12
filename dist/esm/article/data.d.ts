/// <reference types="node" resolution-mode="require"/>
import ParceledData from "../classes/parcel.js";
import type { Comment } from "../comment/index.js";
interface ArticleData {
    /** @property {boolean} `true`일 경우 해당 정보는 read()를 통해 얻어온 정보, `false`일 경우 readPage()를 통해 얻어온 요약 정보 */
    isSummary?: boolean;
    /** @property {boolean} 공지글 여부 */
    isNotice?: boolean;
    /** @property {number} 게시글 번호 */
    articleId?: number;
    /** @property {string} 게시글 작성자 */
    author?: string;
    /** @property {string} 게시글 분류 */
    category?: string;
    /** @property {string} 게시글 제목 */
    title?: string;
    /** @property {string} 게시글 내용 */
    content?: string;
    /** @property {Date} 게시글 작성 시각 */
    time?: Date;
    /** @property {number} 게시글 조회수 */
    views?: number;
    /** @property {Comment[]} 게시글 댓글 목록 */
    comments?: Comment[];
    /** @property {number} 게시글 댓글수 */
    commentCount?: number;
    /** @property {number[]} 게시글 추천 수와 비추천 수 */
    rate?: number[];
    /** @property {number} 게시글 추천 수 - 비추천 수 */
    rateDiff?: number;
    /** @property {URL} 게시글 URL */
    url?: URL;
}
declare class ParceledArticleData extends ParceledData<ArticleData> {
}
export type { ArticleData };
export { ParceledArticleData };
