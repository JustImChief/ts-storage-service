import { default as StorageService } from './StorageService';
declare class LocalStorageService extends StorageService {
    constructor(prefix?: string);
}
declare class SessionStorageService extends StorageService {
    constructor(prefix?: string);
}
export default StorageService;
export { LocalStorageService, SessionStorageService };
