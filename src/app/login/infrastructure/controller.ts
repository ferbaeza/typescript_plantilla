import { Request, Response } from "express";
import { BaseController } from "../../../base/BaseController";
import { JsonResponse } from "../../../utils/JsonResponse";
import { CommandBus } from "../../../shared/Domain/CommandBus";
import { LoginCommand } from "../application/LoginCommand"; // Add missing import statement


export class LoginController /* extends BaseController */{
    constructor(
        private readonly commandBus: CommandBus
    ) {
    }
    static commandBus: CommandBus;

    static get(req: Request, res: Response): void {
        JsonResponse.send(res,{ data: 'Hello World from Login Module!' }, 'Login');
    }

    static login(req: Request, res: Response): void {
        const command = new LoginCommand({
            nombre: req.body.nombre,
            password: req.body.password
        });

        const response = LoginController.process(command);
        console.log('response', response);
        // const response = LoginController.commandBus.execute(command);
        JsonResponse.send(res, { "data": req.body, "response": response }, 'Login');

    }

    static async process(command: LoginCommand): Promise<void> {
        const nameClass = LoginCommand.name + "Handler";
        const file = await import(`../application/${nameClass}`); // Remove unnecessary path
        const handler = new file[nameClass](); // Remove unnecessary path
        const data = await handler.run(command);
        // console.log('data', data);
        return data;
    }

    // async run(command: LoginCommand): Promise<void> {
    //     console.log('command', command);
    //     await this.commandBus.execute(command);
    // }
}