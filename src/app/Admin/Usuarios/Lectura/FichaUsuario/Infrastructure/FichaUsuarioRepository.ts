import { UsuarioDaoEntity } from '../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { UsuarioNoExisteException } from '../../../../../Shared/Exceptions/Usuario/UsuarioException';
import { FichaUsuarioRepositoryInterface } from '../Domain/Interfaces/FichaUsuarioRepositoryInterface';

export class FichaUsuarioRepository implements FichaUsuarioRepositoryInterface {
  public async getEntity(idUsuario: string): Promise<UsuarioDaoEntity> {
    const usuario = await UsuariosModel.findByPk(idUsuario);

    if (usuario === undefined || usuario === null) {
      throw new UsuarioNoExisteException();
    }
    return this.usuarioDaoEntity(usuario);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private usuarioDaoEntity(usuario: any) {
    return UsuarioDaoEntity.fromRepository(usuario);
  }
}
