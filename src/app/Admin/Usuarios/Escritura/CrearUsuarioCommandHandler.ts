import { UsuarioRepository } from "../Shared/Infrastructure/Datasource/UsuarioRepository";
import { CrearUsuarioCommand } from "./CrearUsuarioCommand";


export class CrearUsuarioCommandHandler {
    constructor(protected repository: UsuarioRepository) {
    }
    async run(data: CrearUsuarioCommand) {
        console.log(data);
        // const usuario = new Usuario(data);
        // await this.repository.crear(usuario);
        // return usuario;
    }
}