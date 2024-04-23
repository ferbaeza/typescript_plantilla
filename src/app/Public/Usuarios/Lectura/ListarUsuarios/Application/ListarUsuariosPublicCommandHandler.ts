import { NoExistenUsuariosException } from "../../../../../Shared/Exceptions/Usuario/UsuarioException";
import { UsuariosLecturaPublicRepositoryInterface } from "../../Shared/Domain/Interfaces/UsuariosLecturaPublicRepositoryInterface";


export class ListarUsuariosPublicCommandHandler {
    constructor(
        protected readonly repository: UsuariosLecturaPublicRepositoryInterface
    ) {
    }
    public async run() {

        const usuarios = await this.repository.listar();
        if (!usuarios) {
            throw new NoExistenUsuariosException();
        }
        console.log(usuarios);

        return { total: usuarios.length , usuarios: usuarios };
    }
}