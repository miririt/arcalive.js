"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestResponse = void 0;
const node_fetch_1 = require("node-fetch");
const node_html_parser_1 = require("node-html-parser");
// Response datatypes
class RequestResponse extends node_fetch_1.Response {
    constructor(response) {
        // I don't know why ResponseInit can accept Response, but it works, anyway.
        super(response.body, response);
    }
    async parse() {
        const html = await this.text();
        return (0, node_html_parser_1.parse)(html);
    }
}
exports.RequestResponse = RequestResponse;
//# sourceMappingURL=data.js.map