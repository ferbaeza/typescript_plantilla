import { UsuarioNuevo } from '../Domain/Entity/UsuarioNuevo';
import { UsuarioRepositoryInterface } from '../Domain/Interfaces/UsuarioRepositoryInterface';
import { ValidadorUsuario } from '../Domain/Service/ValidadorUsuario';
import { CrearUsuarioCommand } from './CrearUsuarioCommand';

export class CrearUsuarioCommandHandler {
  constructor(
    protected readonly repository: UsuarioRepositoryInterface,
    protected readonly validadorUsuario: ValidadorUsuario
  ) {}
  async run(command: CrearUsuarioCommand) {
    const usuario = UsuarioNuevo.fromCommand(command);
    console.log(usuario);
    await this.validadorUsuario.validar(usuario);

    return this.repository.crear(usuario);
  }
}
