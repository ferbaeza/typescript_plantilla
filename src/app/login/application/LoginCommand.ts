import { Command } from '../../../shared/Domain/Command';
import { v4 as uuidv4 } from 'uuid';


type Params = {
    nombre: string;
    password: string;
};

export class LoginCommand extends Command{
    id?: string;
    nombre: string;
    password: string;

    constructor(params: Params) {
        super();
        this.id = uuidv4();
        this.nombre = params.nombre;
        this.password = params.password;
    }
}