import { LoginCommand } from "./LoginCommand";



export class LoginCommandHandler {
    constructor() {

    }


    run(command: LoginCommand): any {
        console.log('command', command);
        const params = {email: command.email, password: command.password};
        return params;
    }

    static go(command: LoginCommand): any {
        console.log('command', command);
        const params = { email: command.email, password: command.password };
        return params;
    }
}
