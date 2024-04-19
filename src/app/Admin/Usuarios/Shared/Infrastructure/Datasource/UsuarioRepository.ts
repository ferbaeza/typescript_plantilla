import { UsuarioRepositoryInterface } from "../../Domain/UsuarioRepositoryInterface";
import { UsuariosModel } from "../../../../../../shared/Database/Squelize/Usuarios/UsuariosModel";
import { UsuarioDaoEntity } from "../../../../../../shared/Database/Dao/Usuarios/UsuarioDaoEntity";

export class UsuarioRepository implements UsuarioRepositoryInterface {

    constructor() {
    }

    async listar(): Promise<any> {
        try {

            const usuarios = await UsuariosModel.findAll();
            return usuarios.map(usuario => this.usuarioDaoEntity(usuario));

        } catch (error) {
            console.log(error);
        }
    }

    usuarioDaoEntity(usuario: any) {
        return UsuarioDaoEntity.fromRepository(usuario);
    }
}