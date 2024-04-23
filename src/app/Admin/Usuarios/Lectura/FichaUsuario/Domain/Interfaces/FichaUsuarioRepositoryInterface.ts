import { UsuarioDaoEntity } from '../../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';

export interface FichaUsuarioRepositoryInterface {
  getEntity(idUsuario: string): Promise<UsuarioDaoEntity>;
}
