import { Request, Response } from "express";
import path from 'path';
import { readdirSync } from 'fs'

import { CommandBus } from "../../../../../shared/Bus/Domain/CommandBus";
import { JsonResponse } from "../../../../../shared/Utils/JsonResponse";
import { LoginCommand } from "../../Login/Application/LoginCommand";
import { BaseController } from "../../../../../shared/Base/BaseController";
import { LoginCommandHandler } from "../../Login/Application/LoginCommandHandler";


export class UsuariosController extends BaseController{
    protected commandBus: CommandBus;
    protected loginCommandHandler: LoginCommandHandler;

    constructor(
    ) {
        super();
        this.loginCommandHandler = new LoginCommandHandler();
        this.commandBus = new CommandBus();
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const command = new LoginCommand({email: req.body.email, password: req.body.password});
            
            // const resp = await this.loginCommandHandler.run(command);
            const response = await UsuariosController.process(command); // Call the correct method
            JsonResponse.send(res, { "data": req.body, response }, path.basename(__filename));
            
        } catch (error) {
            
        }
    }

    async run(command: LoginCommand): Promise<void> {
        console.log('command', command);
        await this.commandBus.execute(command);
    }

    static async process(command: any): Promise<void> {
        const nameClass = command.constructor.name + "Handler";
        
        const PATH = `${__dirname}`
        const files = readdirSync(PATH);
        console.log(files);
        
        const file = await import(`../application/${nameClass}`); 
        console.log(nameClass, file);

        
        const handler = new file[nameClass](); 
        // const data = await handler.go(command);
        console.log(command);
        // console.log('data', data);
        // return data;
    }

    // async run(command: LoginCommand): Promise<void> {
    //     console.log('command', command);
    //     await this.commandBus.execute(command);
    // }
}