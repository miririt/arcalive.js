import type { RequestInit } from "node-fetch";
interface RequestOption extends RequestInit {
    csrfRequired?: boolean;
}
export type { RequestOption };
