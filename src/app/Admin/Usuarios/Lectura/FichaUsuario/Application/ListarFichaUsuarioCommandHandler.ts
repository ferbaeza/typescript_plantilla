import { FichaUsuarioRepositoryInterface } from '../Domain/Interfaces/FichaUsuarioRepositoryInterface';
import { ListarFichaUsuarioCommand } from './ListarFichaUsuarioCommand';

export class ListarFichaUsuarioCommandHandler {
  constructor(protected readonly repository: FichaUsuarioRepositoryInterface) {}

  public async run(command: ListarFichaUsuarioCommand) {
    const usuario = await this.repository.getEntity(command.id);

    return { usuarios: usuario, from: command };
  }
}
