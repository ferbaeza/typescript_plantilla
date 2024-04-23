"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommand = void 0;
const uuid_1 = require("uuid");
class BaseCommand {
    constructor() {
        this.commandId = (0, uuid_1.v4)();
        this.createdAt = new Date().toString();
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map