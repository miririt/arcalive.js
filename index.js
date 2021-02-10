const RequestSession = require('./src/request-session');
const Board = require('./src/board');
const Article = require('./src/article');
const Comment = require('./src/comment');
const FetchQueue = require('./src/fetch-queue');

FetchQueue.setRateLimit(1000);

module.exports = {
  FetchQueue: FetchQueue,
  Session: RequestSession,
  Board: Board,
  Article: Article,
  Comment: Comment
};