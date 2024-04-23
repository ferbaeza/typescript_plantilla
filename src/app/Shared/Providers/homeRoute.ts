import { Router } from 'express';
import path from 'path';

import { UsuarioHomeException } from '../Exceptions/Usuario/UsuarioException';
import { HttpStatusCode } from '../Utils/HttpCodes';
import { JsonResponse } from '../Utils/JsonResponse';

const homeRoute = Router();

homeRoute.get('/', (req, res) => {
  JsonResponse.send(res, { message: 'Hello World from Home Route' }, path.basename(__filename));
});

homeRoute.get('/error', (req, res) => {
  try {
    throw new UsuarioHomeException();
  } catch (error) {
    if (error instanceof UsuarioHomeException) {
      return JsonResponse.error(
        res,
        error,
        error.message,
        path.basename(__filename),
        HttpStatusCode.INTERNAL_SERVER_ERROR
      );
    } else {
      console.log('error else');
    }
  }
});

export default homeRoute;
