import { NoExistenUsuariosException } from "../../../../../Shared/Exceptions/Usuario/UsuarioException";
import { UsuariosLecturaRepositoryInterface } from "../Domain/Interfaces/UsuariosLecturaRepositoryInterface";
import { ListarUsuariosCommand } from "./ListarUsuariosCommand";

export class ListarUsuariosCommandHandler {
  constructor(
    protected readonly repository: UsuariosLecturaRepositoryInterface
  ) {}
  public async run(command: ListarUsuariosCommand) {
    const usuarios = await this.repository.listar();
    if (usuarios === undefined || usuarios === null || usuarios.length === 0) {
      throw new NoExistenUsuariosException();
    }

    return { total: usuarios.length, from: command, usuarios: usuarios };
  }
}
