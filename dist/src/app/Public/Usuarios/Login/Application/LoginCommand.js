"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCommand = void 0;
const Command_1 = require("../../../../Shared/Bus/Domain/Command");
class LoginCommand extends Command_1.Command {
    constructor(params) {
        super();
        this.email = params.email;
        this.password = params.password;
    }
}
exports.LoginCommand = LoginCommand;
//# sourceMappingURL=LoginCommand.js.map