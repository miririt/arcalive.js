import fetch from "node-fetch";
/**
 * Rate Limit을 준수하는 fetch queue
 */
class FetchQueue {
    queue = [];
    head = 0;
    clean = 64;
    stopped = false;
    _rateLimit = 400;
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
        if (newLimit < 100)
            return;
        this._rateLimit = newLimit;
    }
    constructor() {
        this.fetchStep();
    }
    /**
     * 다음 Fetch 작업을 얻어온다.
     * 큐에 완료된 작업이 쌓여있을 경우 정리한다.
     *
     * @returns {FetchTask} task 다음에 실행해야 하는 fetch 작업 정보
     */
    next() {
        if (this.head === this.queue.length) {
            this.queue = [];
            this.head = 0;
        }
        if (this.head > this.clean) {
            this.queue = this.queue.slice(this.head);
            this.head = 0;
        }
        if (this.queue.length === 0)
            return null;
        else
            return this.queue[this.head++];
    }
    /**
     * 다음 Fetch 작업을 수행한다.
     */
    fetchStep() {
        const task = this.next();
        if (task !== null) {
            fetch(task.args[0].toString(), task.args[1])
                .then((res) => {
                task.resolver(res);
            })
                .catch((err) => {
                task.rejecter(err);
            });
        }
        else {
            this.stop();
        }
        if (!this.stopped) {
            setTimeout(() => this.fetchStep(), this.rateLimit);
        }
    }
    /**
     * Fetch를 일시정지한다.
     */
    pause() {
        this.stopped = true;
    }
    /**
     * Fetch가 정지되어 있었을 경우 다시 시작한다.
     */
    resume() {
        if (this.stopped) {
            this.stopped = false;
            this.fetchStep();
        }
    }
    /**
     * Fetch를 정지한다.
     * 대기열의 모든 fetch는 전부 reject된다.
     */
    stop() {
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
    fetch(resource, init) {
        const fetchPromise = new Promise((resolve, reject) => {
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
const fetchQueueInstance = new FetchQueue();
export default fetchQueueInstance;
//# sourceMappingURL=fetch-queue.js.map