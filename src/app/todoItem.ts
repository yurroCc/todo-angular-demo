export class TodoItem{
    constructor(taskVai: string, completeVal:boolean =false) {
        this.task = taskVai;
        this.complete = completeVal;
    }
    task: string;
    complete: boolean;
}
