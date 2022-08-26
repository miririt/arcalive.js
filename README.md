# Docs

[Documentation](https://miririt.github.io/arcalive.js/)

# Examples

## 1. 세션 만들기

```javascript
import * as Arca from "arcalive";

const session = await Arca.Session.loginSession(username, password); // username과 password로 아이디와 비밀번호 전달
```

## 2. 게시판 조작

```javascript
import * as Arca from "arcalive";

const session = await Arca.Session.anonymousSession(); // 익명 세션 획득
const board = await session.getBoard("breaking");

board.readArticle(articleId); // 해당 board에서 articleId에 해당하는 게시글을 읽어옴.
board.writeArticle({
  // 해당 board에 게시글을 작성함
  category: "정보",
  title: "게시글 작성",
  content: "테스트 내용입니다.<br>HTML 코드를 전달합니다.",
});

board.deleteArticle(articleId); // 해당 board에서 articleId에 해당하는 게시글을 삭제함
board.editArticle(articleId, {
  // 해당 게시글의 내용을 수정함
  category: "정보",
  title: "게시글 작성",
  content: "테스트 내용입니다.<br>HTML 코드를 전달합니다.",
});

board.readPage(pageNo); // 해당 board에서 pageNo번째 페이지에 있는 게시글들의 미리보기를 읽어옴(인덱스는 1부터 시작)
```

## 3. 게시글 조작

```javascript
import * as Arca from "arcalive";

const session = await Arca.Session.anonymousSession(); // 익명 세션 획득
const board = await session.getBoard("breaking");

const article = board.getArticle(articleId); // 해당 board에서 articleId에 해당하는 객체를 얻어옴
const anotherArticle = await session.getArticle(articleId); // Article Id는 Board와 독립이기 때문에 세션에서 직접 얻어올 수도 있음
const yetAnotherArticle = await session.articleFromUrl(articleUrl); // 혹은 URL으로도 얻어올 수 있음

article.read(); // 게시판에서 수행하는 작업과 동일
article.delete();
article.edit({
  category: "정보",
  title: "게시글 작성",
  content: "테스트 내용입니다.<br>HTML 코드를 전달합니다.",
});

article.writeComment(comment); // 해당 게시글에 댓글을 작성함
article.deleteComment(commentId); // 해당 게시글
```

## 4. Rate Limit 조절

```javascript
import { FetchQueue } from "arcalive";

FetchQueue.rateLimit = 100; // 모든 요청을 최소 100ms의 간격을 두고 실행
```
