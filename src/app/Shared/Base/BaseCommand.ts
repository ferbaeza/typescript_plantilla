import { v4 as uuidv4 } from 'uuid';

export abstract class BaseCommand {
  public createdAt: string;
  public commandId: string;

  constructor() {
    this.commandId = uuidv4();
    this.createdAt = new Date().toString();
  }
}
