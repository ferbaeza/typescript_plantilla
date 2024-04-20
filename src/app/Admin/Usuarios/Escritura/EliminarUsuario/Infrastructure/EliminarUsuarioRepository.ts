import { UsuarioDaoEntity } from "../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity";
import { UsuariosModel } from "../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel";
import { RepositoryException } from "../../../../../Shared/Exceptions/Framework/FrameworExceptions";
import { UsuarioNoExisteException } from "../../../../../Shared/Exceptions/Usuario/UsuarioException";
import { EliminarUsuarioRepositoryInterface } from "../Domain/Interfaces/EliminarUsuarioRepositoryInterface";

export class EliminarUsuarioRepository implements EliminarUsuarioRepositoryInterface
 {

    constructor() {
    }

    public async eliminarusuario(idUsuario: string): Promise<any> {
        try {
            const usuario = await UsuariosModel.findByPk(idUsuario);
            if (usuario) {
                return usuario.destroy();
            }
            return false;

        } catch (error) {
            console.log(error);
            throw new RepositoryException();
        }
    }

    private usuarioDaoEntity(usuario: any) {
        return UsuarioDaoEntity.fromRepository(usuario);
    }
}