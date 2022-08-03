const Arca = require("..");

describe("익명 세션 게시글 열람 테스트", function () {
  const session = Arca.Session.anonymousSession();

  it("getBoard로 게시글 열람 테스트", async function () {
    const board = await session.getBoard("notice");
    return await board.readArticle(6457546, {
      noCache: true,
      withComments: false,
    });
  });

  it("fromUrl로 채널을 통한 게시글 열람 테스트", async function () {
    const board = await session.fromUrl("https://arca.live/b/notice");
    return await board.readArticle(6457546, {
      noCache: true,
      withComments: false,
    });
  });

  it("fromUrl로 채널을 통한 댓글 열람 테스트", async function () {
    const board = await session.fromUrl("https://arca.live/b/notice");
    const article = await board.readArticle(6457546, {
      noCache: true,
      withComments: true,
    });
    const [anyComment] = article.comments;
    await anyComment.read();
  });

  it("fromUrl로 직접 게시글 열람 테스트", async function () {
    const article = await session.fromUrl("https://arca.live/b/notice/6457546");
    return await article.read({
      noCache: true,
      withComments: true,
    });
  });
});
