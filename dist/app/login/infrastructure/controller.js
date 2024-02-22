"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.LoginController = void 0;
const JsonResponse_1 = require("../../../utils/JsonResponse");
const LoginCommand_1 = require("../application/LoginCommand"); // Add missing import statement
class LoginController /* extends BaseController */ {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    static get(req, res) {
        JsonResponse_1.JsonResponse.send(res, { data: 'Hello World from Login Module!' }, 'Login');
    }
    static login(req, res) {
        const command = new LoginCommand_1.LoginCommand({
            nombre: req.body.nombre,
            password: req.body.password
        });
        const response = LoginController.process(command);
        console.log('response', response);
        // const response = LoginController.commandBus.execute(command);
        JsonResponse_1.JsonResponse.send(res, { "data": req.body, "response": response }, 'Login');
    }
    static process(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const nameClass = LoginCommand_1.LoginCommand.name + "Handler";
            const file = yield Promise.resolve(`${`../application/${nameClass}`}`).then(s => __importStar(require(s))); // Remove unnecessary path
            const handler = new file[nameClass](); // Remove unnecessary path
            const data = yield handler.run(command);
            // console.log('data', data);
            return data;
        });
    }
}
exports.LoginController = LoginController;
