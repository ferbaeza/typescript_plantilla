import { BaseCommand } from '../../../../../Shared/Base/BaseCommand';

export class CrearUsuarioCommand extends BaseCommand {
  constructor(
    public readonly id: string | null,
    public readonly nombre: string,
    public readonly email: string,
    public readonly password: string
  ) {
    super();
  }
}
