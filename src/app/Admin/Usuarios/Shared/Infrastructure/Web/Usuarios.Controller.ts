import path from 'path';
import { Request, Response } from "express";
import { LoginCommand } from "../../../Login/Application/LoginCommand";
import { HttpStatusCode } from '../../../../../../shared/Utils/HttpCodes';
import { JsonResponse } from "../../../../../../shared/Utils/JsonResponse";
import { BaseController } from "../../../../../../shared/Base/BaseController";
import { LoginCommandHandler } from "../../../Login/Application/LoginCommandHandler";
import { CrearUsuarioCommand } from '../../../Escritura/CrearUsuario/Application/CrearUsuarioCommand';
import { NoExistenUsuariosException, UsuarioYaExisteConEseIdException, UsuarioYaExisteConEseMailException } from '../../../../../../shared/Exceptions/Usuario/UsuarioException';
import { CrearUsuarioCommandHandler } from '../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler';
import { ListarUsuariosCommandHandler } from "../../../Lectura/ListarUsuarios/Application/ListarUsuariosCommandHandler";


export class UsuariosController extends BaseController {

    constructor(
        protected readonly listarUsuariosCommandHandler: ListarUsuariosCommandHandler,
        protected readonly crearUsuarioCommandHandler: CrearUsuarioCommandHandler,
        protected readonly loginCommandHandler: LoginCommandHandler,
    ) {
        super();
    }

    public async listar(request: Request, response: Response): Promise<any> {
        try {

            const usuarios = await this.listarUsuariosCommandHandler.run();
            JsonResponse.send(response, { "data": usuarios }, path.basename(__filename));

        } catch (error) {
            if (error instanceof NoExistenUsuariosException) {
                JsonResponse.error(response, error, error.message, path.basename(__filename), HttpStatusCode.NO_CONTENT);
            }
        }
    }

    public async crearUsuario(request: Request, response: Response): Promise<any> {
        try {
            const { id, nombre, email, password } = request.body;

            const command = new CrearUsuarioCommand(id, nombre, email, password);
            const data = await this.crearUsuarioCommandHandler.run(command);
            JsonResponse.send(response, data, path.basename(__filename));

        } catch (error) {
            if (error instanceof NoExistenUsuariosException) {
                JsonResponse.error(response, error, error.message, path.basename(__filename), HttpStatusCode.NO_CONTENT);
            }
            if (error instanceof UsuarioYaExisteConEseMailException) {
                JsonResponse.error(response, error, error.message, path.basename(__filename), HttpStatusCode.BAD_REQUEST);
            }
            if (error instanceof UsuarioYaExisteConEseIdException) {
                JsonResponse.error(response, error, error.message, path.basename(__filename), HttpStatusCode.BAD_REQUEST);
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