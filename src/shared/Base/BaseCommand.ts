import { v4 as uuidv4 } from 'uuid';

export class BaseCommand {
    public createdAt: string;
    public id: string ;
    
    constructor() {
        this.id = uuidv4();
        this.createdAt = new Date().toString();
    }
}