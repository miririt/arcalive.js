const fetch = require("node-fetch");

/**
 * @typedef FetchTask
 * @property {object} args
 * @property {string|URL} args.resource
 * @property {fetch.RequestInit} args.init
 * @property {function} resolver Fetch Promise 성공시 resolver
 * @property {function} rejecter Fetch Promise 실패시 resolver
 */
/**
 * Rate Limit을 준수하는 fetch queue
 */
class FetchQueue {
  /** @type {FetchTask[]} */
  _queue = [];
  _head = 0;
  _clean = 64;
  _rateLimit = 400;
  _stopped = false;

  constructor() {
    this._fetchStep();
  }

  /**
   * 다음 Fetch 작업을 얻어온다.
   * 큐에 완료된 작업이 쌓여있을 경우 정리한다.
   *
   * @returns {FetchTask} task 다음에 실행해야 하는 fetch 작업 정보
   */
  _next() {
    if (this._head === this._queue.length) {
      delete this._queue;
      this._queue = [];
      this._head = 0;
    }
    if (this._head > this._clean) {
      this._queue = this._queue.slice(this._head);
      this._head = 0;
    }

    if (this._queue.length === 0) return null;
    else return this._queue[this._head++];
  }

  /**
   * 다음 Fetch 작업을 수행한다.
   */
  _fetchStep() {
    const task = this._next();

    if (task !== null) {
      fetch(...task.args)
        .then(function (res) {
          task.resolver(res);
        })
        .catch(function (err) {
          task.rejecter(err);
        });
    } else {
      this.stop();
    }

    if (!this._stopped) {
      setTimeout(() => this._fetchStep(), this.rateLimit);
    }
  }

  get rateLimit() {
    return this._rateLimit;
  }

  /**
   * Rate Limit을 재설정한다.
   * 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다.
   *
   * @param {number} newLimit 새 제한(단위:ms)
   */
  set rateLimit(newLimit) {
    // 너무 터무니없는 값은 일단 거름
    if (newLimit < 100) return;
    this._rateLimit = newLimit;
  }

  /**
   * Rate Limit을 재설정한다.
   * 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다.
   *
   * @deprecated use "rateLimit" property instead.
   * @param {number} newLimit 새 제한(단위:ms)
   */
  setRateLimit(newLimit) {
    this._rateLimit = newLimit;
  }

  /**
   * Fetch를 일시정지한다.
   */
  pause() {
    this._stopped = true;
  }

  /**
   * Fetch가 정지되어 있었을 경우 다시 시작한다.
   */
  resume() {
    if (this._stopped) {
      this._stopped = false;
      this._fetchStep();
    }
  }

  /**
   * Fetch를 정지한다.
   * 대기열의 모든 fetch는 전부 reject된다.
   */
  stop() {
    this.pause();

    this._queue.forEach((task) => {
      task.rejecter(new Error("Fetch queue has been stopped"));
    });

    delete this._queue;
    this._queue = [];
    this._head = 0;
  }

  /**
   * 새 fetch를 큐에 넣는다.
   *
   * @param {string|URL} resource
   * @param {fetch.RequestInit} init
   * @returns {Promise<Response>} 응답
   */
  fetch(resource, init) {
    let resolver, rejecter;
    const fetchPromise = new Promise(function (resolve, reject) {
      resolver = resolve;
      rejecter = reject;
    });

    this._queue.push({
      args: [resource, init],
      resolver: resolver,
      rejecter: rejecter,
    });

    this.resume();
    return fetchPromise;
  }
}

const fetchQueueInstance = new FetchQueue();

module.exports = fetchQueueInstance;
