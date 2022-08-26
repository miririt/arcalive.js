import { RequestInit, Response } from "node-fetch";
import { FetchResource } from "./data.js";
/**
 * Rate Limit을 준수하는 fetch queue
 */
declare class FetchQueue {
    private queue;
    private head;
    private clean;
    private stopped;
    private static _rateLimit;
    private static _instance;
    static get rateLimit(): number;
    /**
     * Rate Limit을 재설정한다.
     * 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다.
     *
     * @param {number} newLimit 새 제한(단위:ms)
     */
    static set rateLimit(newLimit: number);
    static get instance(): FetchQueue;
    private constructor();
    /**
     * 다음 Fetch 작업을 얻어온다.
     * 큐에 완료된 작업이 쌓여있을 경우 정리한다.
     *
     * @returns {FetchTask} task 다음에 실행해야 하는 fetch 작업 정보
     */
    private next;
    /**
     * 다음 Fetch 작업을 수행한다.
     */
    private fetchStep;
    /**
     * Fetch를 일시정지한다.
     */
    pause(): void;
    /**
     * Fetch가 정지되어 있었을 경우 다시 시작한다.
     */
    resume(): void;
    /**
     * Fetch를 정지한다.
     * 대기열의 모든 fetch는 전부 reject된다.
     */
    stop(): void;
    /**
     * 새 fetch를 큐에 넣는다.
     *
     * @param {FetchResource} resource
     * @param {RequestInit} init
     * @returns {Promise<Response>} 응답
     */
    fetch(resource: FetchResource, init: RequestInit): Promise<Response>;
}
export { FetchQueue };
