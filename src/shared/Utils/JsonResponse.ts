import { HttpStatusCode } from "./HttpCodes";


export class JsonResponse {
    public static send(res: any, data: any, module:string): void {
        const response = 
        {
            data, 
            module,
            "statusCode": HttpStatusCode.OK, 
            success: true,
        };
        res.status(HttpStatusCode.OK).json(response);
    }

    public static error(res: any, error: any, message:string, module: string): void {
        const response =
        {
            error,
            message,
            module,
            "statusCode": HttpStatusCode.INTERNAL_SERVER_ERROR,
            success: false,
        };
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json(response);
    }
}