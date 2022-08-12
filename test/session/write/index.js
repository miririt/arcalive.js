/**
 *
 * @param {Promise<import('../../../dist/index').Session>} sessionPromise
 */
export default function WriteTest(sessionPromise) {
  it("게시글에 댓글 달고 삭제 테스트", async function () {
    const session = await sessionPromise;
    const board = await session.getBoard("notice");
    const article = await board.getArticle(6457546);
    const comment = await article.writeComment("?");

    await comment.delete();
  });
}
