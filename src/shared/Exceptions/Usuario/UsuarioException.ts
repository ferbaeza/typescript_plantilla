import { UsuarioBaseException } from "./UsuarioBaseException";

export const UsuarioHome = "Error Test Usuarios Home";
export const NoExistenUsuarios = "No existen usuarios";
export const usuarioYaExisteConEseMail = "El usuario ya existe con este email";
export const usuarioYaExisteConEseId = "El usuario ya existe con este id";

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

export class UsuarioYaExisteConEseMailException extends UsuarioBaseException {
    constructor() {
        super(usuarioYaExisteConEseMail);
        this.name = this.constructor.name;
    }
}


export class UsuarioYaExisteConEseIdException extends UsuarioBaseException {
    constructor() {
        super(usuarioYaExisteConEseId);
        this.name = this.constructor.name;
    }
}

