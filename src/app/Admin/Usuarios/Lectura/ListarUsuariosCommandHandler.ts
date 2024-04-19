import { NoExistenUsuariosException } from "../../../../shared/Exceptions/Usuario/UsuarioHomeException";
import { UsuarioRepositoryInterface } from "../Shared/Domain/UsuarioRepositoryInterface";
import { UsuarioRepository } from "../Shared/Infrastructure/Datasource/UsuarioRepository";


export class ListarUsuariosCommandHandler {
    constructor(protected repository: UsuarioRepository) {
    }
    async run() {
        const usuarios = await this.repository.listar();
        if (usuarios.length === 0){
            throw new NoExistenUsuariosException();
        }
        return {usuarios: usuarios, total: usuarios.length};
    }
}