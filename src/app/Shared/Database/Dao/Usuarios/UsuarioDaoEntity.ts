export class UsuarioDaoEntity {
  id: string;
  nombre: string;
  email: string;
  password: string;
  activo: boolean;
  verificado: boolean;

  constructor(
    id: string,
    nombre: string,
    email: string,
    password: string,
    activo: boolean,
    verificado: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.activo = activo;
    this.verificado = verificado;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromRepository(model: any) {
    return new UsuarioDaoEntity(
      model.id,
      model.nombre,
      model.email,
      model.password,
      model.activo ?? false,
      model.verificado ?? false
    );
  }

  setActivoTrue() {
    this.activo = true;
    return this;
  }
}
