class ParceledData {
    _data;
    constructor(data = {}) {
        this._data = data;
    }
    get data() {
        return { ...this._data };
    }
}
export default ParceledData;
//# sourceMappingURL=parcel.js.map