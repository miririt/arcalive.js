class ParceledData {
    _data;
    constructor(data = {}) {
        this._data = Object.assign({}, data);
    }
    parcel(data) {
        this._data = Object.assign({}, data);
    }
    unparcel() {
        return Object.assign({}, this._data);
    }
}
export default ParceledData;
//# sourceMappingURL=parcel.js.map