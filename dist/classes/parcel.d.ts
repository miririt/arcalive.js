declare class ParceledData<T> {
    _data: T;
    constructor(data?: T);
    parcel(data: T): void;
    unparcel(): T;
}
export default ParceledData;
