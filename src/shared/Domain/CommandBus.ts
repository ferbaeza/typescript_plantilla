import { Command } from './Command';

export class CommandBus {
  execute(command: Command){
    console.log('command',command);
    this.getFile(command);
  }

  private async dispatch(command: Command) {
    const name = command+"Handler";
    const handler = new (await import(`../../app/${name}`))[name]();
    await handler.run(command);
  }

  private async getFile(command: Command): Promise<void> {
    const nameClass = Command.name + "Handler";
    const file = await import(`../application/${nameClass}`); // Remove unnecessary path
    const handler = new file[nameClass](); // Remove unnecessary path
    handler.run(command);
}
}