import { UsuarioNoExisteException } from "../../../../../Shared/Exceptions/Usuario/UsuarioException";
import { EliminarUsuarioRepositoryInterface } from "../Domain/Interfaces/EliminarUsuarioRepositoryInterface";
import { EliminarUsuarioCommand } from "./EliminarUsuarioCommand";


export class EliminarUsuarioCommandHandler {
    constructor(protected readonly repository: EliminarUsuarioRepositoryInterface) {
    }
    public async run(command: EliminarUsuarioCommand) {

        const usuario = await this.repository.eliminarusuario(command.id);
        if(!usuario){
            throw new UsuarioNoExisteException();

        }

        return { usuario : command.id, from : command };
    }
}