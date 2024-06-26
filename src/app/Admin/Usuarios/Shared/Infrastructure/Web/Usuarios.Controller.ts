import { Request, Response } from 'express';
import path from 'path';

import { BaseController } from '../../../../../Shared/Base/BaseController';
import { RepositoryException } from '../../../../../Shared/Exceptions/Framework/FrameworExceptions';
import {
  NoExistenUsuariosException,
  UsuarioNoExisteException,
  UsuarioYaExisteConEseIdException,
  UsuarioYaExisteConEseMailException
} from '../../../../../Shared/Exceptions/Usuario/UsuarioException';
import { HttpStatusCode } from '../../../../../Shared/Utils/HttpCodes';
import { JsonResponse } from '../../../../../Shared/Utils/JsonResponse';
import { CrearUsuarioCommand } from '../../../Escritura/CrearUsuario/Application/CrearUsuarioCommand';
import { CrearUsuarioCommandHandler } from '../../../Escritura/CrearUsuario/Application/CrearUsuarioCommandHandler';
import { EliminarUsuarioCommand } from '../../../Escritura/EliminarUsuario/Application/EliminarUsuarioCommand';
import { EliminarUsuarioCommandHandler } from '../../../Escritura/EliminarUsuario/Application/EliminarUsuarioCommandHandler';
import { ListarFichaUsuarioCommand } from '../../../Lectura/FichaUsuario/Application/ListarFichaUsuarioCommand';
import { ListarFichaUsuarioCommandHandler } from '../../../Lectura/FichaUsuario/Application/ListarFichaUsuarioCommandHandler';
import { ListarUsuariosCommand } from '../../../Lectura/ListarUsuarios/Application/ListarUsuariosCommand';
import { ListarUsuariosCommandHandler } from '../../../Lectura/ListarUsuarios/Application/ListarUsuariosCommandHandler';

export class UsuariosController extends BaseController {
  constructor(
    protected readonly listarUsuariosCommandHandler: ListarUsuariosCommandHandler,
    protected readonly crearUsuarioCommandHandler: CrearUsuarioCommandHandler,
    protected readonly listarFichaUsuarioCommandHandler: ListarFichaUsuarioCommandHandler,
    protected readonly eliminarUsuarioCommandHandler: EliminarUsuarioCommandHandler
  ) {
    super();
  }

  public async listar(request: Request, response: Response): Promise<void> {
    try {
      const command = new ListarUsuariosCommand();
      const usuarios = await this.listarUsuariosCommandHandler.run(command);
      JsonResponse.send(response, { data: usuarios }, path.basename(__filename));
    } catch (error) {
      if (error instanceof NoExistenUsuariosException) {
        JsonResponse.error(
          response,
          error,
          error.message,
          path.basename(__filename),
          HttpStatusCode.NO_CONTENT
        );
      }
    }
  }

  public async ListarFichaUsuarioCommand(request: Request, response: Response): Promise<void> {
    try {
      const { id } = request.params;
      const command = new ListarFichaUsuarioCommand(id);
      const usuarios = await this.listarFichaUsuarioCommandHandler.run(command);
      JsonResponse.send(response, { data: usuarios }, path.basename(__filename));
    } catch (error) {
      if (error instanceof NoExistenUsuariosException) {
        JsonResponse.error(
          response,
          error,
          error.message,
          path.basename(__filename),
          HttpStatusCode.NO_CONTENT
        );
      }
    }
  }

  public async eliminarUsuario(request: Request, response: Response): Promise<void> {
    try {
      const { id } = request.params;
      const command = new EliminarUsuarioCommand(id);
      const data = await this.eliminarUsuarioCommandHandler.run(command);
      JsonResponse.send(response, data, `Usuario ${id} eliminado correctamente`);
    } catch (error) {
      if (error instanceof UsuarioNoExisteException) {
        JsonResponse.error(
          response,
          error,
          error.message,
          path.basename(__filename),
          HttpStatusCode.INTERNAL_SERVER_ERROR
        );
      }
    }
  }

  public async crearUsuario(request: Request, response: Response): Promise<void> {
    try {
      const { id, nombre, email, password } = request.body;

      const command = new CrearUsuarioCommand(id, nombre, email, password);
      const data = await this.crearUsuarioCommandHandler.run(command);
      JsonResponse.send(
        response,
        data,
        `Usuario ${nombre} con email ${email} creado correctamente`
      );
    } catch (error) {
      if (error instanceof UsuarioYaExisteConEseMailException) {
        JsonResponse.error(
          response,
          error,
          error.message,
          path.basename(__filename),
          HttpStatusCode.BAD_REQUEST
        );
      }
      if (error instanceof UsuarioYaExisteConEseIdException) {
        JsonResponse.error(
          response,
          error,
          error.message,
          path.basename(__filename),
          HttpStatusCode.BAD_REQUEST
        );
      }

      if (error instanceof RepositoryException) {
        JsonResponse.error(
          response,
          error,
          error.message,
          path.basename(__filename),
          HttpStatusCode.BAD_REQUEST
        );
      }
    }
  }
}
