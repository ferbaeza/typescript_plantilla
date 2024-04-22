import { BaseException } from "../BaseException";

export const UsuarioHome = "Error Test Usuarios Home";
export const NoExistenUsuarios = "No existen usuarios";
export const usuarioYaExisteConEseMail = "El usuario ya existe con este email";
export const usuarioYaExisteConEseId = "El usuario ya existe con este id";
export const usuarioNoExisteException = "El usuario no existe";

export class UsuarioHomeException extends BaseException {
  constructor() {
    super(UsuarioHome);
    this.name = this.constructor.name;
  }
}

export class UsuarioNoExisteException extends BaseException {
  constructor() {
    super(usuarioNoExisteException);
    this.name = this.constructor.name;
  }
}

export class NoExistenUsuariosException extends BaseException {
  constructor() {
    super(NoExistenUsuarios);
    this.name = this.constructor.name;
  }
}

export class UsuarioYaExisteConEseMailException extends BaseException {
  constructor() {
    super(usuarioYaExisteConEseMail);
    this.name = this.constructor.name;
  }
}

export class UsuarioYaExisteConEseIdException extends BaseException {
  constructor() {
    super(usuarioYaExisteConEseId);
    this.name = this.constructor.name;
  }
}
