import { default as StorageService } from './StorageService';

class LocalStorageService extends StorageService {
  constructor(prefix = '') {
    super(typeof localStorage !== 'undefined' ? localStorage : {}, prefix);
  }
}

class SessionStorageService extends StorageService {
  constructor(prefix = '') {
    super(typeof sessionStorage !== 'undefined' ? sessionStorage : {}, prefix);
  }
}

export default StorageService;
export { LocalStorageService, SessionStorageService };