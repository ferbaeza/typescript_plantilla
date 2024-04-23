import { UsuarioRepositoryInterface } from '../Domain/Interfaces/UsuarioRepositoryInterface';
import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { UsuarioDaoEntity } from '../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { RepositoryException } from '../../../../../Shared/Exceptions/Framework/FrameworExceptions';

export class UsuarioRepository implements UsuarioRepositoryInterface {
  public async crear(usuario: any): Promise<any> {
    try {
      const usuarioGuardado = await UsuariosModel.create(usuario);
      return this.usuarioDaoEntity(usuarioGuardado);
    } catch (error) {
      throw new RepositoryException();
    }
  }

  public async validarUsuario(specificacion: any): Promise<boolean> {
    const existe = await UsuariosModel.findOne({ where: specificacion });
    if (existe) {
      return true;
    }
    return false;
  }

  private usuarioDaoEntity(usuario: any) {
    return UsuarioDaoEntity.fromRepository(usuario);
  }
}
