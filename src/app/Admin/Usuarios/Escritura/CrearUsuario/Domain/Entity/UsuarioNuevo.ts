import { v4 as uuidv4 } from "uuid";

import { CrearUsuarioCommand } from "../../Application/CrearUsuarioCommand";

export class UsuarioNuevo {
  constructor(
    public readonly id: string,
    public readonly nombre: string,
    public readonly email: string,
    public readonly password: string,
    public readonly activo: boolean,
    public readonly verificado: boolean
  ) {}

  static fromCommand(command: CrearUsuarioCommand) {
    const idUsuario = command.id ?? uuidv4();
    const activo = false;
    const verificado = false;

    return new UsuarioNuevo(
      idUsuario,
      command.nombre,
      command.email,
      command.password,
      activo,
      verificado
    );
  }
}
