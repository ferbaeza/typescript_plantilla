import { UsuariosModel } from "../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel";
import { UsuariosListadoEntity } from "../../ListarUsuarios/Domain/UsuariosListadoEntity";
import { UsuariosLecturaPublicRepositoryInterface } from "../Domain/Interfaces/UsuariosLecturaPublicRepositoryInterface";

export class UsuariosLecturaPublicRepository implements UsuariosLecturaPublicRepositoryInterface {

    constructor() {
    }

    public async listar(): Promise<UsuariosListadoEntity[] | undefined> {
        try {
            const usuarios = await UsuariosModel.findAll();
            return usuarios.map(usuario => this.usuarioDaoEntity(usuario));
        } catch (error) {
            console.log(error);
        }
        return undefined;
    }

    private usuarioDaoEntity(usuario: any) {
        return UsuariosListadoEntity.fromRepository(usuario);
    }
}