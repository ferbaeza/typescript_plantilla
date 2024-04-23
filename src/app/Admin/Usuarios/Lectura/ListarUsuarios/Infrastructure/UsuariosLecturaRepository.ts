import { UsuarioDaoEntity } from '../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity';
import { UsuariosModel } from '../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel';
import { UsuariosLecturaRepositoryInterface } from '../Domain/Interfaces/UsuariosLecturaRepositoryInterface';

export class UsuariosLecturaRepository implements UsuariosLecturaRepositoryInterface {
  constructor() {}

  public async listar(): Promise<UsuarioDaoEntity[] | undefined> {
    const usuarios = await UsuariosModel.findAll();
    return usuarios.map(usuario => this.usuarioDaoEntity(usuario));
  }

  private usuarioDaoEntity(usuario: any) {
    return UsuarioDaoEntity.fromRepository(usuario);
  }
}
