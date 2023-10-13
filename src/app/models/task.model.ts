export class Task {
  constructor(public taskName: string, public autor: string, public descricao: string, public colunaId: number, public id?: number | null){}
}