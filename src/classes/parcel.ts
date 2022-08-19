class ParceledData<T> {
  _data: T;

  constructor(data: T = {} as T) {
    this._data = Object.assign({}, data);
  }

  parcel(data: T): void {
    this._data = Object.assign({}, data);
  }
  unparcel(): T {
    return Object.assign({}, this._data);
  }
}

export default ParceledData;
