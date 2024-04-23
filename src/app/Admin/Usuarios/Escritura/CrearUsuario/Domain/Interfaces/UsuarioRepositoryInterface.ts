import { UsuarioDaoEntity } from '../../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { UsuarioNuevo } from '../Entity/UsuarioNuevo';

export interface UsuarioRepositoryInterface {
  crear(usuario: UsuarioNuevo): Promise<UsuarioDaoEntity>;
  validarUsuario(specificacion: object): Promise<boolean>;
}
