export abstract class BaseSeeder {
  public createdAt: string;

  constructor() {
    this.createdAt = new Date().toString();
  }
}
