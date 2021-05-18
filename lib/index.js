"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorageService = exports.LocalStorageService = void 0;
var StorageService_1 = require("./StorageService");
var LocalStorageService = /** @class */ (function (_super) {
    __extends(LocalStorageService, _super);
    function LocalStorageService(prefix) {
        if (prefix === void 0) { prefix = ''; }
        return _super.call(this, typeof localStorage !== 'undefined' ? localStorage : {}, prefix) || this;
    }
    return LocalStorageService;
}(StorageService_1.default));
exports.LocalStorageService = LocalStorageService;
var SessionStorageService = /** @class */ (function (_super) {
    __extends(SessionStorageService, _super);
    function SessionStorageService(prefix) {
        if (prefix === void 0) { prefix = ''; }
        return _super.call(this, typeof sessionStorage !== 'undefined' ? sessionStorage : {}, prefix) || this;
    }
    return SessionStorageService;
}(StorageService_1.default));
exports.SessionStorageService = SessionStorageService;
exports.default = StorageService_1.default;
//# sourceMappingURL=index.js.map