import { UsuariosListadoEntity } from "../../../ListarUsuarios/Domain/UsuariosListadoEntity";

export interface UsuariosLecturaPublicRepositoryInterface {
  listar(): Promise<UsuariosListadoEntity[] | undefined>;
}
