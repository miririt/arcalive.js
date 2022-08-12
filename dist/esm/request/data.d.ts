/// <reference types="node" resolution-mode="require"/>
import type { RequestInit } from "node-fetch";
import { Response } from "node-fetch";
import { HTMLElement } from "node-html-parser";
declare type FetchTask = {
    args: [string | URL, RequestInit];
    resolver: (value: Response) => void;
    rejecter: (reason?: any) => void;
};
declare type FetchResource = string | URL;
export type { FetchTask, FetchResource };
declare class RequestResponse extends Response {
    constructor(response: Response);
    parse(): Promise<HTMLElement>;
}
export { RequestResponse };
