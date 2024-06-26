import cors from 'cors';
import express from 'express';
import * as http from 'http';
import morgan from 'morgan';

import { dataBaseConnect } from '../Database/Config/DatabaseConnection';
import homeRoute from '../Providers/homeRoute';
import routesProviders from '../Providers/routesProviders';
// import { DatabaseSeeder } from "../Seeder/DatabaseSeeder";

export class Server {
  private readonly port: number;
  private httpServer?: http.Server;
  private readonly express: express.Express;

  constructor(port: number) {
    this.port = port;
    this.express = express();
    this.middlewares();
    this.routes();
    dataBaseConnect();
    // new DatabaseSeeder().seed();
  }

  middlewares(): void {
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
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
