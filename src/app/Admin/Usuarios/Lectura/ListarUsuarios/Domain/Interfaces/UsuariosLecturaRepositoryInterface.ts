import { UsuarioDaoEntity } from "../../../../../../Shared/Database/Dao/Usuarios/UsuarioDaoEntity";

export interface UsuariosLecturaRepositoryInterface {
  listar(): Promise<UsuarioDaoEntity[] | undefined>;
}
