export class ProyectoDaoEntity {
  constructor(
    public readonly id: string,
    public readonly titulo: string,
    public readonly descripcion: string,
    public readonly puntuacion: number,
    public readonly url: string,
    public readonly usuarioId: string
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRepository(model: any) {
    return new ProyectoDaoEntity(
      model.id,
      model.titulo,
      model.descripcion,
      model.puntuacion ?? 0,
      model.url ?? '',
      model.usuario_id
    );
  }
}
