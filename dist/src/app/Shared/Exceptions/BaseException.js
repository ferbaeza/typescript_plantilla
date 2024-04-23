"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseException = void 0;
class BaseException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=BaseException.js.map