import { UsuarioDaoEntity } from "../../../../../../shared/Database/Dao/Usuarios/UsuarioDaoEntity";
import { UsuariosModel } from "../../../../../../shared/Database/Squelize/Usuarios/UsuariosModel";
import { UsuariosLecturaRepositoryInterface } from "../Domain/Interfaces/UsuariosLecturaRepositoryInterface";

export class UsuariosLecturaRepository implements UsuariosLecturaRepositoryInterface {

    constructor() {
    }

    public async listar(): Promise<UsuarioDaoEntity [] | undefined> {
        try {
            const usuarios = await UsuariosModel.findAll();
            return usuarios.map(usuario => this.usuarioDaoEntity(usuario));
        } catch (error) {
            console.log(error);
        }
        return undefined;
    }

    private usuarioDaoEntity(usuario: any) {
        return UsuarioDaoEntity.fromRepository(usuario);
    }
}