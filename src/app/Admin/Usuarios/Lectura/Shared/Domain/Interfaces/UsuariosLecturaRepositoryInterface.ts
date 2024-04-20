import { UsuarioDaoEntity } from "../../../../../../../shared/Database/Dao/Usuarios/UsuarioDaoEntity";


export interface UsuariosLecturaRepositoryInterface {
    listar(): Promise<UsuarioDaoEntity[] | undefined>;
    
}