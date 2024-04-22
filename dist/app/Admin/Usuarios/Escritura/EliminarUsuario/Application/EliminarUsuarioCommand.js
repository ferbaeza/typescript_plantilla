"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarUsuarioCommand = void 0;
const BaseCommand_1 = require("../../../../../Shared/Base/BaseCommand");
class EliminarUsuarioCommand extends BaseCommand_1.BaseCommand {
    constructor(id) {
        super();
        this.id = id;
    }
}
exports.EliminarUsuarioCommand = EliminarUsuarioCommand;
