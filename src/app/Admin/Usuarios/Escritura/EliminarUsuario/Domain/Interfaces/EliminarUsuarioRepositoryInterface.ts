export interface EliminarUsuarioRepositoryInterface {
  eliminarusuario(idUsuario: string): Promise<boolean>;
}
