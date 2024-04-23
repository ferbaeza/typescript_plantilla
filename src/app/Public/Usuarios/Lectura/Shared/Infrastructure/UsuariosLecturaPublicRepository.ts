import { UsuariosListadoEntity } from "../../ListarUsuarios/Domain/UsuariosListadoEntity";
import { UsuariosModel } from "../../../../../Shared/Database/Squelize/Usuarios/UsuariosModel";
import { UsuariosLecturaPublicRepositoryInterface } from "../Domain/Interfaces/UsuariosLecturaPublicRepositoryInterface";

export class UsuariosLecturaPublicRepository implements UsuariosLecturaPublicRepositoryInterface
{
  public async listar(): Promise<UsuariosListadoEntity[] | undefined> {
    const usuarios = await UsuariosModel.findAll();
    return usuarios.map((usuario) => this.usuarioDaoEntity(usuario));
  }

  private usuarioDaoEntity(usuario: any) {
    return UsuariosListadoEntity.fromRepository(usuario);
  }
}
