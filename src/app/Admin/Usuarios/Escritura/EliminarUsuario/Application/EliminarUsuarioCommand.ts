import { BaseCommand } from "../../../../../Shared/Base/BaseCommand";

export class EliminarUsuarioCommand extends BaseCommand {
  constructor(public readonly id: string) {
    super();
  }
}
