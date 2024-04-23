export class ProyectoDaoEntity {
  constructor(
    public readonly id: string,
    public readonly titulo: string,
    public readonly descripcion: string,
    public readonly puntuacion: number,
    public readonly url: string,
    public readonly usuarioId: string
  ) {}

  static fromRepository(model: any) {
    return new ProyectoDaoEntity(
      model.id,
      model.titulo,
      model.descripcion,
      model.puntuacion ?? 0,
      model.url ?? "",
      model.usuario_id
    );
  }
}
