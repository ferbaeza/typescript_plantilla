import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { UsuariosListadoEntity } from '../../ListarUsuarios/Domain/UsuariosListadoEntity';
import { UsuariosLecturaPublicRepositoryInterface } from '../Domain/Interfaces/UsuariosLecturaPublicRepositoryInterface';

export class UsuariosLecturaPublicRepository implements UsuariosLecturaPublicRepositoryInterface {
  public async listar(): Promise<UsuariosListadoEntity[] | undefined> {
    const usuarios = await UsuariosModel.findAll();
    console.log('usuarios', typeof usuarios);
    return usuarios.map(usuario => this.usuarioDaoEntity(usuario));
  }

  private usuarioDaoEntity(usuario: object) {
    return UsuariosListadoEntity.fromRepository(usuario);
  }
}
