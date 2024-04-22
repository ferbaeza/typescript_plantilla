"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryException = exports.repositoryException = void 0;
const BaseException_1 = require("../BaseException");
exports.repositoryException = "repository Exception";
class RepositoryException extends BaseException_1.BaseException {
    constructor() {
        super(exports.repositoryException);
        this.name = this.constructor.name;
    }
}
exports.RepositoryException = RepositoryException;
