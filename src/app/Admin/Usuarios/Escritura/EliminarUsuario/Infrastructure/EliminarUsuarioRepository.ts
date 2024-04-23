import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { RepositoryException } from '../../../../../Shared/Exceptions/Framework/FrameworExceptions';
import { EliminarUsuarioRepositoryInterface } from '../Domain/Interfaces/EliminarUsuarioRepositoryInterface';

export class EliminarUsuarioRepository implements EliminarUsuarioRepositoryInterface {
  public async eliminarusuario(idUsuario: string): Promise<boolean> {
    try {
      const usuario = await UsuariosModel.findByPk(idUsuario);
      if (usuario) {
        usuario.destroy();
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      throw new RepositoryException();
    }
  }
}
