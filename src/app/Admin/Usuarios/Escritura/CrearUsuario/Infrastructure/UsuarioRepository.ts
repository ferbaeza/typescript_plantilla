import { UsuarioDaoEntity } from '../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { RepositoryException } from '../../../../../Shared/Exceptions/Framework/FrameworExceptions';
import { UsuarioNuevo } from '../Domain/Entity/UsuarioNuevo';
import { UsuarioRepositoryInterface } from '../Domain/Interfaces/UsuarioRepositoryInterface';

export class UsuarioRepository implements UsuarioRepositoryInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async crear(usuario: UsuarioNuevo | any): Promise<UsuarioDaoEntity> {
    try {
      const usuarioGuardado = await UsuariosModel.create(usuario);
      return this.usuarioDaoEntity(usuarioGuardado);
    } catch (error) {
      throw new RepositoryException();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async validarUsuario(specificacion: object | any): Promise<boolean> {
    const existe = await UsuariosModel.findOne({ where: specificacion });
    if (existe) {
      return true;
    }
    return false;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private usuarioDaoEntity(usuario: any) {
    return UsuarioDaoEntity.fromRepository(usuario);
  }
}
