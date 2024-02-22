import { HttpStatusCode } from "./HttpCodes";


export class JsonResponse {
    public static send(res: any, data: any, module:string): void {
        const response = 
        {
            "response": data, 
            "module": module,
            "status": HttpStatusCode.OK, 
            error: false, 
            success: true,
        };
        res.status(HttpStatusCode.OK).json(response);
    }
}