import { NoExistenUsuariosException } from "../../../../../../shared/Exceptions/Usuario/UsuarioException";
import { UsuariosLecturaPublicRepositoryInterface } from "../../Shared/Domain/Interfaces/UsuariosLecturaPublicRepositoryInterface";


export class ListarUsuariosPublicCommandHandler {
    constructor(protected readonly repository: UsuariosLecturaPublicRepositoryInterface) {
    }
    public async run() {

        const usuarios = await this.repository.listar();
        if (usuarios === undefined || usuarios === null || usuarios.length === 0) {
            throw new NoExistenUsuariosException();
        }

        return { usuarios: usuarios, total: usuarios.length };
    }
}