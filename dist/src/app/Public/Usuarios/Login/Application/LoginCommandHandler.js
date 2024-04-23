"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCommandHandler = void 0;
class LoginCommandHandler {
    run(command) {
        console.log('command', command);
        const params = { email: command.email, password: command.password };
        return params;
    }
    static go(command) {
        console.log('command', command);
        const params = { email: command.email, password: command.password };
        return params;
    }
}
exports.LoginCommandHandler = LoginCommandHandler;
//# sourceMappingURL=LoginCommandHandler.js.map