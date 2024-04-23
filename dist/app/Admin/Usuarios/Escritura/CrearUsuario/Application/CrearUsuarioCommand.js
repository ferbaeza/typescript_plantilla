"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearUsuarioCommand = void 0;
const BaseCommand_1 = require("../../../../../Shared/Base/BaseCommand");
class CrearUsuarioCommand extends BaseCommand_1.BaseCommand {
    constructor(id, nombre, email, password) {
        super();
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}
exports.CrearUsuarioCommand = CrearUsuarioCommand;
