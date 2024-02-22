"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonResponse = void 0;
const HttpCodes_1 = require("./HttpCodes");
class JsonResponse {
    static send(res, data, module) {
        const response = {
            "response": data,
            "module": module,
            "status": HttpCodes_1.HttpStatusCode.OK,
            error: false,
            success: true,
        };
        res.status(HttpCodes_1.HttpStatusCode.OK).json(response);
    }
}
exports.JsonResponse = JsonResponse;
