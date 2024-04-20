import path from 'path';
import { Router } from "express";
import { JsonResponse } from "../Utils/JsonResponse";
import { UsuarioBaseException } from '../Exceptions/Usuario/UsuarioBaseException';
import { UsuarioHomeException } from '../Exceptions/Usuario/UsuarioException';
import { HttpStatusCode } from '../Utils/HttpCodes';

const homeRoute = Router();

homeRoute.get('/', (req, res) => {
    JsonResponse.send(res, { message: 'Hello World from Home Route' }, path.basename(__filename));
});

homeRoute.get('/error', (req, res) => {
    try {
        throw new UsuarioHomeException();
    } catch (error) {
        if (error instanceof UsuarioBaseException) {
            return JsonResponse.error(res, error, error.message, path.basename(__filename), HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
    }
});

export default homeRoute;