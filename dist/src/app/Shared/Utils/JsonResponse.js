"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonResponse = void 0;
const HttpCodes_1 = require("./HttpCodes");
class JsonResponse {
    static send(res, data, mensaje) {
        const response = {
            data,
            mensaje,
            statusCode: HttpCodes_1.HttpStatusCode.OK,
            success: true
        };
        res.status(HttpCodes_1.HttpStatusCode.OK).json(response);
    }
    static error(res, error, message, module, code) {
        const response = {
            error,
            message,
            module,
            statusCode: code !== null && code !== void 0 ? code : HttpCodes_1.HttpStatusCode.INTERNAL_SERVER_ERROR,
            success: false
        };
        res.status(code !== null && code !== void 0 ? code : HttpCodes_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json(response);
    }
}
exports.JsonResponse = JsonResponse;
//# sourceMappingURL=JsonResponse.js.map