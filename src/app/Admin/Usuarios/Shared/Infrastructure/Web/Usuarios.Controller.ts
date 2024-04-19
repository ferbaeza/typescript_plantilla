import path from 'path';
import { Request, Response } from "express";
import { UsuarioRepository } from "../Datasource/UsuarioRepository";
import { LoginCommand } from "../../../Login/Application/LoginCommand";
import { JsonResponse } from "../../../../../../shared/Utils/JsonResponse";
import { BaseController } from "../../../../../../shared/Base/BaseController";
import { LoginCommandHandler } from "../../../Login/Application/LoginCommandHandler";
import { ListarUsuariosCommandHandler } from "../../../Lectura/ListarUsuariosCommandHandler";
import { NoExistenUsuariosException } from '../../../../../../shared/Exceptions/Usuario/UsuarioHomeException';
import { HttpStatusCode } from '../../../../../../shared/Utils/HttpCodes';
import { CrearUsuarioCommand } from '../../../Escritura/CrearUsuarioCommand';
import { CrearUsuarioCommandHandler } from '../../../Escritura/CrearUsuarioCommandHandler';


export class UsuariosController extends BaseController {
    protected repository: UsuarioRepository;
    protected loginCommandHandler: LoginCommandHandler;
    protected listarUsuariosCommandHandler: ListarUsuariosCommandHandler;
    protected crearUsuarioCommandHandler: CrearUsuarioCommandHandler;

    constructor(repository: UsuarioRepository) {
        super();
        this.repository = repository;
        this.loginCommandHandler = new LoginCommandHandler();
        this.listarUsuariosCommandHandler = new ListarUsuariosCommandHandler(this.repository);
        this.crearUsuarioCommandHandler = new CrearUsuarioCommandHandler(this.repository);
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
            const {nombre, email , password} = request.body;
            const command = new CrearUsuarioCommand(nombre, email, password);
            const response = await this.crearUsuarioCommandHandler.run(command);
            JsonResponse.send(response, response, path.basename(__filename));

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