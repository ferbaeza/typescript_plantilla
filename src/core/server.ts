import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as http from 'http';


export class Server {
    private readonly port: string;
    private httpServer?: http.Server;
    private readonly express: express.Express;

    constructor(port: string) {
        this.port = port;
        this.express = express();
        // /**middlewares*/
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(express.json());

        this.express.get('/', (req, res) => {
            res.send('Hello World');
        });
    }


    getHHTPServer(): Server['httpServer'] {
        return this.httpServer;
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
                this.httpServer.close(error=>{
                    if(error){
                        reject(error);
                        return;
                    }
                    resolve();
                });
            }
        });
    }
}


