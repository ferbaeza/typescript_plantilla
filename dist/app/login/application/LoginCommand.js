"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCommand = void 0;
const Command_1 = require("../../../shared/Domain/Command");
const uuid_1 = require("uuid");
class LoginCommand extends Command_1.Command {
    constructor(params) {
        super();
        this.id = (0, uuid_1.v4)();
        this.nombre = params.nombre;
        this.password = params.password;
    }
}
exports.LoginCommand = LoginCommand;
