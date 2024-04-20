import { HttpStatusCode } from "./HttpCodes";


export class JsonResponse {
    public static send(res: any, data: any, mensaje:string): void {
        const response = 
        {
            data, 
            mensaje,
            "statusCode": HttpStatusCode.OK, 
            success: true,
        };
        res.status(HttpStatusCode.OK).json(response);
    }

    public static error(res: any, error: any, message: string, module: string, code: HttpStatusCode ): void {
        const response =
        {
            error,
            message,
            module,
            "statusCode": code ?? HttpStatusCode.INTERNAL_SERVER_ERROR,
            success: false,
        };
        res.status(code ?? HttpStatusCode.INTERNAL_SERVER_ERROR).json(response);
    }
}