"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routesProviders_1 = __importDefault(require("../providers/routesProviders"));
class Server {
    constructor(port) {
        this.port = port;
        this.express = (0, express_1.default)();
        // /**middlewares*/
        this.express.use((0, cors_1.default)());
        this.express.use((0, morgan_1.default)('dev'));
        this.express.use(express_1.default.urlencoded({ extended: false }));
        this.express.use(express_1.default.json());
        this.express.use('/api', routesProviders_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const env = this.express.get('env');
                this.httpServer = this.express.listen(this.port, () => {
                    console.log(`App is running on http://localhost:${this.port} en el entorno ${env}`);
                    console.log('  Press CTRL-C to stop\n');
                    resolve();
                });
            });
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    getHHTPServer() {
        return this.httpServer;
    }
}
exports.Server = Server;
