import cors from 'cors';
import morgan from 'morgan';
import * as http from 'http';
import express from 'express';
import routesProviders from '../Providers/routesProviders';
import homeRoute from '../Providers/homeRoute';


export class Server {
    private readonly port: number;
    private httpServer?: http.Server;
    private readonly express: express.Express;

    constructor(port: number) {
        this.port = port;
        this.express = express();
        this.middlewares()
        this.routes();
    }

    middlewares(): void {
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(express.json());
    }

    routes(): void {
        this.express.use('/', homeRoute);
        this.express.use('/api', routesProviders);
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            const env = this.express.get('env');
            this.httpServer = this.express.listen(this.port, () => {
                console.log(`App is running on http://localhost:${this.port} en el entorno ${env}`);
                console.log('  Press CTRL-C to stop\n');
                resolve();
            });
        });
    }

    async close(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close(error => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve();
                });
            }
        });
    }

    getHHTPServer(): Server['httpServer'] {
        return this.httpServer;
    }
}


