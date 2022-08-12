import process from "process";
import * as Arca from "arcalive";
import dotenv from "dotenv";

import { ReadTest, WriteTest } from "./session/index.js";

dotenv.config();

describe("익명 세션 게시글 열람 테스트", function () {
  const session = Arca.Session.anonymousSession();
  ReadTest(session);
});

describe("로그인 세션 게시글 열람 테스트", function () {
  const session = Arca.Session.loginSession(
    process.env.TEST_USERNAME,
    process.env.TEST_PASSWORD
  );

  ReadTest(session);
});

describe("로그인 세션 쓰기 테스트", function () {
  const session = Arca.Session.loginSession(
    process.env.TEST_USERNAME,
    process.env.TEST_PASSWORD
  );

  WriteTest(session);
});
