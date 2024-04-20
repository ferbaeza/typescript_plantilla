export abstract class Command {

    public day: number;
    public month: number;
    public year: number;
    public time: number;


    constructor() {
        this.day = new Date().getDate();
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
        this.time = new Date().getTime();
    }
}