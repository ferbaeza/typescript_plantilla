import { UsuarioBaseException } from "./UsuarioBaseException";

export const UsuarioHome = "Error Test Usuarios Home";

export class UsuarioHomeException extends UsuarioBaseException {
    constructor() {
        super(UsuarioHome);
        this.name = this.constructor.name;
    }
}