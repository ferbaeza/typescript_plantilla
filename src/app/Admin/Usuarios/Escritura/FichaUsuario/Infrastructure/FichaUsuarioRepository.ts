import { UsuarioDaoEntity } from '../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { RepositoryException } from '../../../../../Shared/Exceptions/Framework/FrameworExceptions';
import { UsuarioNoExisteException } from '../../../../../Shared/Exceptions/Usuario/UsuarioException';
import { FichaUsuarioRepositoryInterface } from '../Domain/Interfaces/FichaUsuarioRepositoryInterface';

export class FichaUsuarioRepository implements FichaUsuarioRepositoryInterface {
  constructor() {}

  public async getEntity(idUsuario: string): Promise<UsuarioDaoEntity> {
    try {
      const usuario = await UsuariosModel.findOne();
      if (usuario === undefined || usuario === null) {
        throw new UsuarioNoExisteException();
      }

      return this.usuarioDaoEntity(usuario);
    } catch (error) {
      console.log(error);
      throw new RepositoryException();
    }
  }

  private usuarioDaoEntity(usuario: any) {
    return UsuarioDaoEntity.fromRepository(usuario);
  }
}
