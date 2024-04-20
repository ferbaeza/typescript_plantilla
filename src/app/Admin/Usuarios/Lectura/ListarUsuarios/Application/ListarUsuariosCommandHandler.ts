import { NoExistenUsuariosException } from "../../../../../../shared/Exceptions/Usuario/UsuarioException";
import { UsuariosLecturaRepositoryInterface } from "../../Shared/Domain/Interfaces/UsuariosLecturaRepositoryInterface";


export class ListarUsuariosCommandHandler {
    constructor(protected readonly repository: UsuariosLecturaRepositoryInterface) {
    }
    public async run() {

        const usuarios = await this.repository.listar();
        if (usuarios === undefined || usuarios === null || usuarios.length === 0) {
            throw new NoExistenUsuariosException();
        }

        return { usuarios: usuarios, total: usuarios.length };
    }
}