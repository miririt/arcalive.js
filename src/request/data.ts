import type { RequestInit } from "node-fetch";

import { Response } from "node-fetch";
import { parse, HTMLElement } from "node-html-parser";

type FetchTask = {
  args: [string | URL, RequestInit];
  resolver: (value: Response) => void;
  rejecter: (reason?: any) => void;
};

type FetchResource = string | URL;

export type { FetchTask, FetchResource };

// Response datatypes

class RequestResponse extends Response {
  constructor(response: Response) {
    // I don't know why ResponseInit can accept Response, but it works, anyway.
    super(response.body, response);
  }

  async parse(): Promise<HTMLElement> {
    const html = await this.text();
    return parse(html);
  }
}

export { RequestResponse };
