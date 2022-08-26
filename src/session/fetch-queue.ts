import fetch from "node-fetch";
import { RequestInit, Response } from "node-fetch";
import { FetchResource, FetchTask } from "./data.js";

/**
 * Rate Limit을 준수하는 fetch queue
 */
class FetchQueue {
  private queue: FetchTask[] = [];
  private head = 0;
  private clean = 64;
  private stopped = false;

  private static _rateLimit = 0;
  private static _instance: FetchQueue;

  static get rateLimit() {
    return this._rateLimit;
  }

  /**
   * Rate Limit을 재설정한다.
   * 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다.
   *
   * @param {number} newLimit 새 제한(단위:ms)
   */
  static set rateLimit(newLimit: number) {
    // 불가능한 값을 제외하면 유저 자율에 맡김
    if (newLimit < 0) return;
    this._rateLimit = newLimit;
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new FetchQueue();
    }

    return this._instance;
  }

  private constructor() {
    this.fetchStep();
  }

  /**
   * 다음 Fetch 작업을 얻어온다.
   * 큐에 완료된 작업이 쌓여있을 경우 정리한다.
   *
   * @returns {FetchTask} task 다음에 실행해야 하는 fetch 작업 정보
   */
  private next(): FetchTask | null {
    if (this.head === this.queue.length) {
      this.queue = [];
      this.head = 0;
    }
    if (this.head > this.clean) {
      this.queue = this.queue.slice(this.head);
      this.head = 0;
    }

    if (this.queue.length === 0) return null;
    else return this.queue[this.head++];
  }

  /**
   * 다음 Fetch 작업을 수행한다.
   */
  private fetchStep(): void {
    const task = this.next();

    if (task !== null) {
      fetch(task.args[0].toString(), task.args[1])
        .then((res: Response) => {
          task.resolver(res);
        })
        .catch((err: Error) => {
          task.rejecter(err);
        });
    } else {
      this.stop();
    }

    if (!this.stopped) {
      setTimeout(() => this.fetchStep(), FetchQueue.rateLimit);
    }
  }

  /**
   * Fetch를 일시정지한다.
   */
  pause(): void {
    this.stopped = true;
  }

  /**
   * Fetch가 정지되어 있었을 경우 다시 시작한다.
   */
  resume(): void {
    if (this.stopped) {
      this.stopped = false;
      this.fetchStep();
    }
  }

  /**
   * Fetch를 정지한다.
   * 대기열의 모든 fetch는 전부 reject된다.
   */
  stop(): void {
    this.pause();

    this.queue.forEach((task) => {
      task.rejecter(new Error("Fetch queue has been stopped"));
    });

    this.queue = [];
    this.head = 0;
  }

  /**
   * 새 fetch를 큐에 넣는다.
   *
   * @param {FetchResource} resource
   * @param {RequestInit} init
   * @returns {Promise<Response>} 응답
   */
  fetch(resource: FetchResource, init: RequestInit): Promise<Response> {
    const fetchPromise = new Promise<Response>((resolve, reject) => {
      this.queue.push({
        args: [resource, init],
        resolver: resolve,
        rejecter: reject,
      });
    });

    this.resume();
    return fetchPromise;
  }
}

export { FetchQueue };
