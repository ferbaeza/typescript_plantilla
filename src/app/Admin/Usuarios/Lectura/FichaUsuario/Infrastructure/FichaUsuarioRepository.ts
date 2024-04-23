import { UsuarioDaoEntity } from '../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { RepositoryException } from '../../../../../Shared/Exceptions/Framework/FrameworExceptions';
import { UsuarioNoExisteException } from '../../../../../Shared/Exceptions/Usuario/UsuarioException';
import { FichaUsuarioRepositoryInterface } from '../Domain/Interfaces/FichaUsuarioRepositoryInterface';

export class FichaUsuarioRepository implements FichaUsuarioRepositoryInterface {
  constructor() {}

  public async getEntity(idUsuario: string): Promise<UsuarioDaoEntity> {
    const usuario = await UsuariosModel.findOne();

    if (usuario === undefined || usuario === null) {
      throw new UsuarioNoExisteException();
    }
    return this.usuarioDaoEntity(usuario);
  }

  private usuarioDaoEntity(usuario: any) {
    return UsuarioDaoEntity.fromRepository(usuario);
  }
}
