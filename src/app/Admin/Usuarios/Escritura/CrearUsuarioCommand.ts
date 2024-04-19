import { BaseCommand } from "../../../../shared/Base/BaseCommand";


export class CrearUsuarioCommand extends BaseCommand {
    constructor(
        protected email: string,
        protected nombre: string,
        protected password: string,
    ) {
        super();
    }

}