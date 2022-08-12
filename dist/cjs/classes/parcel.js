"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParceledData {
    _data;
    constructor(data = {}) {
        this._data = data;
    }
    get data() {
        return { ...this._data };
    }
}
exports.default = ParceledData;
//# sourceMappingURL=parcel.js.map