import { Server } from './Server';
import { port } from '../Config/AppConfig';

export class BackendApp {

    server?: Server;

    async start(): Promise<void> {
        this.server = new Server(port);
        return this.server.listen();
    }
}