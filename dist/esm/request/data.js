import { Response } from "node-fetch";
import { parse } from "node-html-parser";
// Response datatypes
class RequestResponse extends Response {
    constructor(response) {
        // I don't know why ResponseInit can accept Response, but it works, anyway.
        super(response.body, response);
    }
    async parse() {
        const html = await this.text();
        return parse(html);
    }
}
export { RequestResponse };
//# sourceMappingURL=data.js.map