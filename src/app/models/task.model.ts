export class Task {
    taskObj: { nome: string, autoria: string };
    name: string = '';
    autor: string = '';
  
    constructor(name: string, autor: string) {
      this.taskObj = {
        nome: name,
        autoria: autor
      };
    }
  }