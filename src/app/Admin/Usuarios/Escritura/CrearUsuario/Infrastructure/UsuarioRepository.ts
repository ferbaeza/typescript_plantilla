import { UsuarioDaoEntity } from "../../../../../../shared/Database/Dao/Usuarios/UsuarioDaoEntity";
import { UsuariosModel } from "../../../../../../shared/Database/Squelize/Usuarios/UsuariosModel";
import { UsuarioNuevo } from "../Domain/Entity/UsuarioNuevo";
import { UsuarioRepositoryInterface } from "../Domain/Interfaces/UsuarioRepositoryInterface";

export class UsuarioRepository implements UsuarioRepositoryInterface {

    public async crear(usuario: any): Promise<any> {
        try {

            const usuarioGuardado = await UsuariosModel.create(usuario);
            return this.usuarioDaoEntity(usuarioGuardado); 

        } catch (error) {
            console.log(error);
        }
    }

    public async validarUsuario(specificacion: any): Promise<boolean> {
        try {
            const existe = await UsuariosModel.findOne({ where: specificacion  });
            if (existe) {
                return true;
            }
            return false;
            
        } catch (error) {
            console.log(error);
            return false; 
        }
    }

    public async validarEmail(email: string): Promise<boolean> {
        try {
            const existe = await UsuariosModel.findOne({ where: { email: email } });
            if (existe) {
                return true;
            }
            return false;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    private usuarioDaoEntity(usuario: any) {
        return UsuarioDaoEntity.fromRepository(usuario);
    }
}