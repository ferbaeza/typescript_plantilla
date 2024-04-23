import { UsuarioDaoEntity } from '../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { RepositoryException } from '../../../../../Shared/Exceptions/Framework/FrameworExceptions';
import { UsuarioNoExisteException } from '../../../../../Shared/Exceptions/Usuario/UsuarioException';
import { FichaUsuarioRepositoryInterface } from '../Domain/Interfaces/FichaUsuarioRepositoryInterface';

export class FichaUsuarioRepository implements FichaUsuarioRepositoryInterface {
  public async getEntity(idUsuario: string): Promise<UsuarioDaoEntity> {
    try {
      const usuario = await UsuariosModel.findByPk(idUsuario);
      if (usuario === undefined || usuario === null) {
        throw new UsuarioNoExisteException();
      }

      return this.usuarioDaoEntity(usuario);
    } catch (error) {
      console.log(error);
      throw new RepositoryException();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private usuarioDaoEntity(usuario: any) {
    return UsuarioDaoEntity.fromRepository(usuario);
  }
}
