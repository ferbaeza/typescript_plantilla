"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioYaExisteConEseIdException = exports.UsuarioYaExisteConEseMailException = exports.NoExistenUsuariosException = exports.UsuarioNoExisteException = exports.UsuarioHomeException = exports.usuarioNoExisteException = exports.usuarioYaExisteConEseId = exports.usuarioYaExisteConEseMail = exports.NoExistenUsuarios = exports.UsuarioHome = void 0;
const BaseException_1 = require("../BaseException");
exports.UsuarioHome = 'Error Test Usuarios Home';
exports.NoExistenUsuarios = 'No existen usuarios';
exports.usuarioYaExisteConEseMail = 'El usuario ya existe con este email';
exports.usuarioYaExisteConEseId = 'El usuario ya existe con este id';
exports.usuarioNoExisteException = 'El usuario no existe';
class UsuarioHomeException extends BaseException_1.BaseException {
    constructor() {
        super(exports.UsuarioHome);
        this.name = this.constructor.name;
    }
}
exports.UsuarioHomeException = UsuarioHomeException;
class UsuarioNoExisteException extends BaseException_1.BaseException {
    constructor() {
        super(exports.usuarioNoExisteException);
        this.name = this.constructor.name;
    }
}
exports.UsuarioNoExisteException = UsuarioNoExisteException;
class NoExistenUsuariosException extends BaseException_1.BaseException {
    constructor() {
        super(exports.NoExistenUsuarios);
        this.name = this.constructor.name;
    }
}
exports.NoExistenUsuariosException = NoExistenUsuariosException;
class UsuarioYaExisteConEseMailException extends BaseException_1.BaseException {
    constructor() {
        super(exports.usuarioYaExisteConEseMail);
        this.name = this.constructor.name;
    }
}
exports.UsuarioYaExisteConEseMailException = UsuarioYaExisteConEseMailException;
class UsuarioYaExisteConEseIdException extends BaseException_1.BaseException {
    constructor() {
        super(exports.usuarioYaExisteConEseId);
        this.name = this.constructor.name;
    }
}
exports.UsuarioYaExisteConEseIdException = UsuarioYaExisteConEseIdException;
//# sourceMappingURL=UsuarioException.js.map