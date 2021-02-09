const RequestSession = require('./src/request-session');
const Board = require('./src/board');
const Article = require('./src/article');
const Comment = require('./src/comment');
const fq = require('./src/fetch-queue');

fq.setRateLimit(400);

module.exports = {
  Session: RequestSession,
  Board: Board,
  Article: Article,
  Comment: Comment
};