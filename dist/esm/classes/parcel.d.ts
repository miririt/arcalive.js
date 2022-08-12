declare class ParceledData<T> {
    _data: T;
    constructor(data?: T);
    get data(): T;
}
export default ParceledData;
