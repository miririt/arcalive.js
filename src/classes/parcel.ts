class ParceledData<T> {
  _data: T;

  constructor(data: T = {} as T) {
    this._data = data;
  }

  get data(): T {
    return { ...this._data };
  }
}

export default ParceledData;
