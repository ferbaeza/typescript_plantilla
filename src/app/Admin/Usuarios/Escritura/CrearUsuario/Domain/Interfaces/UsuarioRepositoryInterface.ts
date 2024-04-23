import { UsuarioNuevo } from "../Entity/UsuarioNuevo";

export interface UsuarioRepositoryInterface {
  crear(usuario: UsuarioNuevo): Promise<any>;
  validarUsuario(specificacion: any): Promise<boolean>;
}
