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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendApp = void 0;
const AppConfig_1 = require("../Config/AppConfig");
const Server_1 = require("./Server");
class BackendApp {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.server = new Server_1.Server(AppConfig_1.port);
            this.server.listen();
        });
    }
}
exports.BackendApp = BackendApp;
//# sourceMappingURL=App.js.map