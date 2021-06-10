import { isNull, isNumber, isUndefined } from 'ts-data-validator';
var StorageService = /** @class */ (function () {
    function StorageService(storage, prefix) {
        this.prefix = '';
        this.prefix = prefix;
        this.storage = storage;
    }
    StorageService.prototype.getKey = function (key) {
        return [this.prefix, key]
            .filter(function (item) { return typeof item === 'string' && item.length > 0; })
            .join('_').toLowerCase();
    };
    StorageService.prototype.hasData = function (key) {
        return !isNull(this.getData(key));
    };
    StorageService.prototype.getData = function (key) {
        try {
            var data = JSON.parse(this.storage.getItem(this.getKey(key)));
            if (isNumber(data === null || data === void 0 ? void 0 : data.expires)) {
                if (Date.now() <= data.expires) {
                    return data.value;
                }
                this.removeData(this.getKey(key));
            }
            else {
                return data.value;
            }
        }
        catch (error) {
        }
        return null;
    };
    StorageService.prototype.removeData = function (key) {
        if (this.hasData(key)) {
            try {
                this.storage.removeItem(this.getKey(key));
            }
            catch (error) {
            }
        }
        return this;
    };
    StorageService.prototype.setData = function (key, data, expires) {
        try {
            this.storage.setItem(this.getKey(key), JSON.stringify({
                value: data,
                expires: expires instanceof Date
                    ? expires.getTime()
                    : isNumber(expires) ? Date.now() + expires : null,
            }));
        }
        catch (error) {
        }
        return this;
    };
    StorageService.prototype.updateExpires = function (key, expires) {
        if ((isNumber(expires) || expires instanceof Date) && this.hasData(key)) {
            try {
                var data = JSON.parse(this.storage.getItem(this.getKey(key)));
                if (!isUndefined(data === null || data === void 0 ? void 0 : data.value)) {
                    this.setData(key, data.value, expires);
                }
            }
            catch (error) {
                {
                }
            }
        }
        return this;
    };
    return StorageService;
}());
export default StorageService;
//# sourceMappingURL=index.js.map