export class Task {
    taskObj: { nome: string, autor: string, descricao?: string };
    name: string = '';
    autor: string = '';
    descricao: string = '';
    
    constructor(name: string, autor: string, descricao?: string) {
      this.taskObj = {
        nome: name,
        autor: autor,
        descricao: descricao
      };
    }
  }