export class UsuariosListadoEntity {
  constructor(
    public readonly id: string,
    public readonly nombre: string,
    public readonly email: string,
    public readonly activo: boolean
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRepository(model: any) {
    return new UsuariosListadoEntity(model.id, model.nombre, model.email, model.activo ?? false);
  }
}
