import { port } from "../Config/AppConfig";
import { Server } from "./Server";

export class BackendApp {
  server?: Server;

  async start(): Promise<void> {
    this.server = new Server(port);
    this.server.listen();
  }
}
