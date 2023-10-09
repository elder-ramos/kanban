import { Coluna } from './coluna.model';

export class Quadro {
    constructor(public name: string, public colunas: Coluna[]) {}
}