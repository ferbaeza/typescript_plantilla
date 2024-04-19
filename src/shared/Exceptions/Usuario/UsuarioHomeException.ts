import { UsuarioBaseException } from "./UsuarioBaseException";

export const UsuarioHome = "Error Test Usuarios Home";
export const NoExistenUsuarios = "No existen usuarios";

export class UsuarioHomeException extends UsuarioBaseException {
    constructor() {
        super(UsuarioHome);
        this.name = this.constructor.name;
    }
}

export class NoExistenUsuariosException extends UsuarioBaseException {
    constructor() {
        super(NoExistenUsuarios);
        this.name = this.constructor.name;
    }
}