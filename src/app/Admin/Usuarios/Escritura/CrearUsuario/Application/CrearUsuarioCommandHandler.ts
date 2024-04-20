import { CrearUsuarioCommand } from "./CrearUsuarioCommand";
import { UsuarioNuevo } from "../Domain/Entity/UsuarioNuevo";
import { ValidadorUsuario } from "../Domain/Service/ValidadorUsuario";
import { UsuarioRepositoryInterface } from "../Domain/Interfaces/UsuarioRepositoryInterface";
import { UsuarioYaExisteConEseIdException, UsuarioYaExisteConEseMailException } from "../../../../../Shared/Exceptions/Usuario/UsuarioException";


export class CrearUsuarioCommandHandler {
    constructor(
        protected readonly repository: UsuarioRepositoryInterface,
        protected readonly validadorUsuario: ValidadorUsuario,
    ) {
    }
    async run(command: CrearUsuarioCommand) {
        const usuario = UsuarioNuevo.fromCommand(command);

        await this.validadorUsuario.validar(usuario);

        return this.repository.crear(usuario);
    }
}