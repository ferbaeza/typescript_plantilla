"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    constructor() {
        this.day = new Date().getDate();
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
        this.time = new Date().getTime();
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map