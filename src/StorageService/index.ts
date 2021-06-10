import { isNull, isNumber, isUndefined } from 'ts-data-validator';

class StorageService {
  prefix = '';
  storage: Storage;

  constructor(storage, prefix) {
    this.prefix  = prefix;
    this.storage = storage;
  }

  protected getKey(key: string): string {
    return [this.prefix, key]
      .filter((item) => typeof item === 'string' && item.length > 0)
      .join('_').toLowerCase();
  }

  hasData(key: string): boolean {
    return !isNull(this.getData(key));
  }

  getData(key: string): any {
    try {
      const data = JSON.parse(this.storage.getItem(this.getKey(key)));

      if (isNumber(data?.expires)) {
        if (Date.now() <= data.expires) {
          return data.value;
        }

        this.removeData(this.getKey(key));
      } else {
        return data.value;
      }
    } catch (error) {
    }

    return null;
  }

  removeData(key: string): this {
    if (this.hasData(key)) {
      try {
        this.storage.removeItem(this.getKey(key));
      } catch (error) {
      }
    }

    return this;
  }

  setData(key: string, data: any, expires?: Date | number): this {
    try {
      this.storage.setItem(
        this.getKey(key),
        JSON.stringify(
          {
            value:   data,
            expires: expires instanceof Date
                       ? expires.getTime()
                       : isNumber(expires) ? Date.now() + expires : null,
          },
        ),
      );
    } catch (error) {
    }

    return this;
  }

  updateExpires(key: string, expires: Date | number): this {
    if ((isNumber(expires) || expires instanceof Date) && this.hasData(key)) {
      try {
        const data = JSON.parse(this.storage.getItem(this.getKey(key)));

        if (!isUndefined(data?.value)) {
          this.setData(key, data.value, expires);
        }
      } catch (error) {
        {
        }
      }
    }

    return this;
  }
}

export default StorageService;