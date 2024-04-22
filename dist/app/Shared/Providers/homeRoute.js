"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const UsuarioException_1 = require("../Exceptions/Usuario/UsuarioException");
const HttpCodes_1 = require("../Utils/HttpCodes");
const JsonResponse_1 = require("../Utils/JsonResponse");
const homeRoute = (0, express_1.Router)();
homeRoute.get("/", (req, res) => {
    JsonResponse_1.JsonResponse.send(res, { message: "Hello World from Home Route" }, path_1.default.basename(__filename));
});
homeRoute.get("/error", (req, res) => {
    try {
        throw new UsuarioException_1.UsuarioHomeException();
    }
    catch (error) {
        if (error instanceof UsuarioException_1.UsuarioHomeException) {
            return JsonResponse_1.JsonResponse.error(res, error, error.message, path_1.default.basename(__filename), HttpCodes_1.HttpStatusCode.INTERNAL_SERVER_ERROR);
        }
        else {
            console.log("error else");
        }
    }
});
exports.default = homeRoute;
