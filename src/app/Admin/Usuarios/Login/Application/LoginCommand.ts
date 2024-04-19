import { Command } from '../../../../../shared/Bus/Domain/Command';

type Params = {
    email: string;
    password: string;
};

export class LoginCommand extends Command {
    email: string;
    password: string;

    constructor(params: Params) {
        super();
        this.email = params.email;
        this.password = params.password;
    }
}