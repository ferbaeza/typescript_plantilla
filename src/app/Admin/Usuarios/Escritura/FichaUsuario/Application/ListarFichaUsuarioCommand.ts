import { BaseCommand } from "../../../../../Shared/Base/BaseCommand";


export class ListarFichaUsuarioCommand extends BaseCommand {
    constructor(
        public readonly id: string
    ) {
        super();
    }
}