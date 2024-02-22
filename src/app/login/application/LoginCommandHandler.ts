import { LoginCommand } from "./LoginCommand";



export class LoginCommandHandler{
    constructor() {
    }
    
    async run(command: LoginCommand){
        const nombre = command.nombre;
        const password = command.password;
        const responseFromHandler = {'nombre': nombre,'password':password, commad : "LoginCommandHandler"};
        // console.log('responseFromHandler',responseFromHandler);
        return responseFromHandler;
    }
}