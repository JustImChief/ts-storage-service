declare class StorageService {
    prefix: string;
    storage: Storage;
    constructor(storage: any, prefix: any);
    protected getKey(key: string): string;
    hasData(key: string): boolean;
    getData(key: string): any;
    removeData(key: string): this;
    setData(key: string, data: any, expires?: number): this;
    updateExpires(key: string, expires: number): this;
}
export default StorageService;
