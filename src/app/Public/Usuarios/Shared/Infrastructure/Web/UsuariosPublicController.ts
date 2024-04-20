import path from 'path';
import { Request, Response } from "express";
import { LoginCommand } from "../../../Login/Application/LoginCommand";
import { HttpStatusCode } from '../../../../../Shared/Utils/HttpCodes';
import { JsonResponse } from "../../../../../Shared/Utils/JsonResponse";
import { BaseController } from "../../../../../Shared/Base/BaseController";
import { LoginCommandHandler } from "../../../Login/Application/LoginCommandHandler";
import { ListarUsuariosPublicCommandHandler } from "../../../Lectura/ListarUsuarios/Application/ListarUsuariosPublicCommandHandler";
import { NoExistenUsuariosException } from '../../../../../Shared/Exceptions/Usuario/UsuarioException';


export class UsuariosPublicController extends BaseController {

    constructor(
        protected readonly listarUsuariosPublicCommandHandler: ListarUsuariosPublicCommandHandler,
        protected readonly loginCommandHandler: LoginCommandHandler,
    ) {
        super();
    }

    public async listar(request: Request, response: Response): Promise<any> {
        try {

            const usuarios = await this.listarUsuariosPublicCommandHandler.run();
            JsonResponse.send(response, { "data": usuarios }, path.basename(__filename));

        } catch (error) {
            if (error instanceof NoExistenUsuariosException) {
                JsonResponse.error(response, error, error.message, path.basename(__filename), HttpStatusCode.NO_CONTENT);
            }
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const command = new LoginCommand({ email: req.body.email, password: req.body.password });

            const response = await this.loginCommandHandler.run(command);
            JsonResponse.send(res, { "data": req.body, response }, path.basename(__filename));

        } catch (error) {

        }
    }


}