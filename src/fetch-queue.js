const fetch = require('node-fetch');

/**
 * Fetch 큐 정적 클래스
 */
function FetchQueue() {
  throw new Error('This is a static class');
}

FetchQueue._queue = [];
FetchQueue._head = 0;
FetchQueue._clean = 64;
FetchQueue._rateLimit = 400;
FetchQueue._stopped = false;

/**
 * 다음 Fetch 작업을 얻어온다.
 * 
 * @returns {Object} task 다음에 실행해야 하는 fetch 작업 정보
 */
FetchQueue._next = function() {
  if(this._head === this._queue.length) {
    delete this._queue;
    this._queue = [];
    this._head = 0;
  }
  if(this._head > this._clean) {
    this._queue = this._queue.slice(this._head);
    this._head = 0;
  }

  if(this._queue.length === 0) return null;
  else return this._queue[this._head++];
}

/**
 * 다음 Fetch 작업을 수행한다.
 */
FetchQueue._fetchStep = function() {
  const task = this._next();

  if(task !== null) {
    fetch(...task.args)
      .then(function(res) {
        task.resolver(res);
      })
      .catch(function(err) {
        task.rejecter(err);
      });
  } else {
    this.stop();
  }

  if(!this._stopped) {
    setTimeout(this._fetchStep.bind(this), this._rateLimit);
  }
}

/**
 * Rate Limit을 재설정한다.
 * 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다.
 * 
 * @param {number} newLimit 새 제한(단위:ms)
 */
FetchQueue.setRateLimit = function(newLimit) {
  this._rateLimit = newLimit;
}

/**
 * Fetch를 일시정지한다.
 */
FetchQueue.pause = function() {
  this._stopped = true;
}

/**
 * Fetch가 정지되어 있었을 경우 다시 시작한다.
 */
FetchQueue.resume = function() {
  if(this._stopped) {
    this._stopped = false;
    this._fetchStep();
  }
}

/**
 * Fetch를 정지한다.
 * 대기열의 모든 fetch는 전부 reject된다.
 */
FetchQueue.stop = function() {
  this.pause();

  this._queue.forEach(task => {
    task.rejecter(new Error('Fetch queue has been stopped'));
  });

  delete this._queue;
  this._queue = [];
  this._head = 0;
}

/**
 * 새 fetch를 큐에 넣는다.
 * 
 * @param {string|URL} resource
 * @param {Object} init
 * @returns {Promise<Response>} 응답
 */
FetchQueue.fetch = function(resource, init) {
  let resolver, rejecter;
  const fetchPromise = new Promise(function(resolve, reject) {
    resolver = resolve;
    rejecter = reject;
  });

  this._queue.push({
    args: [resource, init],
    resolver: resolver,
    rejecter: rejecter
  });

  this.resume();
  return fetchPromise;
}

FetchQueue._fetchStep();

module.exports = FetchQueue;