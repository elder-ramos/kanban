import { Task } from "./task.model";

export class Coluna {
    constructor(public name: string, public tasks: Task[]) {}
}