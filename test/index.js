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
    const board = await session.boardFromUrl("https://arca.live/b/notice");
    return await board.readArticle(6457546, {
      noCache: true,
      withComments: false,
    });
  });

  it("Board 캐시 테스트", async function () {
    const board = await session.boardFromUrl("https://arca.live/b/notice");

    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Timeout! Cache failed.")), 30000);
    });

    return await Promise.race([
      timeout,
      (async () => {
        for (let i = 0; i < 1000; i++) {
          await board.readArticle(6457546, {
            withComments: false,
          });
        }
      })(),
    ]);
  });

  it("Article 캐시 테스트", async function () {
    const board = await session.boardFromUrl("https://arca.live/b/notice");

    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Timeout! Cache failed.")), 30000);
    });

    return await Promise.race([
      timeout,
      (async () => {
        const article = await board.getArticle(6457546, {
          withComments: false,
        });
        for (let i = 0; i < 1000; i++) {
          await article.read();
        }
      })(),
    ]);
  });

  it("fromUrl로 채널을 통한 댓글 열람 테스트", async function () {
    const board = await session.boardFromUrl("https://arca.live/b/notice");
    const article = await board.readArticle(6457546, {
      noCache: true,
      withComments: true,
    });
    const [anyComment] = article.comments;
    await anyComment.read();
  });

  it("fromUrl로 직접 게시글 열람 테스트", async function () {
    const article = await session.articleFromUrl(
      "https://arca.live/b/notice/6457546"
    );
    return await article.read({
      noCache: true,
      withComments: false,
    });
  });
});
