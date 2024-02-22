import { Server } from './server';

export class backendApp{

    server? : Server;

    async start(): Promise<void>{
        const port: string = process.env.PORT ?? '3000';
        this.server = new Server(port);
        return this.server.listen();
    }
}