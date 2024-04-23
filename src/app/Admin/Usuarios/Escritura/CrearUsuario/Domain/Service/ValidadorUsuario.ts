import {
  UsuarioYaExisteConEseIdException,
  UsuarioYaExisteConEseMailException,
} from "../../../../../../Shared/Exceptions/Usuario/UsuarioException";
import { UsuarioNuevo } from "../Entity/UsuarioNuevo";
import { UsuarioRepositoryInterface } from "../Interfaces/UsuarioRepositoryInterface";

export class ValidadorUsuario {
  constructor(protected readonly repository: UsuarioRepositoryInterface) {}

  async validar(usuario: UsuarioNuevo) {
    const usuarioYaExisteConEseId = await this.repository.validarUsuario({
      id: usuario.id,
    });
    if (usuarioYaExisteConEseId) {
      throw new UsuarioYaExisteConEseIdException();
    }

    const usuarioYaExisteConEseMail = await this.repository.validarUsuario({
      email: usuario.email,
    });
    if (usuarioYaExisteConEseMail) {
      throw new UsuarioYaExisteConEseMailException();
    }
  }
}
