import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quadro } from '../models/quadro.model';
import { Task } from '../models/task.model';
import { Coluna } from '../models/coluna.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'
  errorMessage: any;
  dbState: any;

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get<any>(url)
  }

  getAll(): Observable<Quadro>{
    return this.http.get<Quadro>(`${this.apiUrl}/quadro/1/colunas?_embed=tasks`);
  }

<<<<<<< Updated upstream
  createColuna(coluna: Coluna[]){
    return this.http.post<Coluna[]>(`${this.apiUrl}/colunas`, (coluna))
=======
  createColumn(coluna: Coluna){
    return this.http.post<Coluna>(`${this.apiUrl}/colunas`, coluna)
>>>>>>> Stashed changes
  }

  createTask(columnId: number, task:Task){
    return this.http.post<Task>(`${this.apiUrl}/colunas/${columnId}`, (task))
  }

<<<<<<< Updated upstream
  updateTaskColumn(task:Task){
    this.http.get<Task[]>(`${this.apiUrl}/colunas/${task.colunaId}/tasks?id=${task.id}`).subscribe((data) => {
      if(data[0] !== task){
        console.log(data[0] != task)
        console.log('Data APISERVICE: ', data[0]);
        console.log('Task APISERVICE: ', task);
        return this.http.put(`${this.apiUrl}/tasks/${task.id}`, task).subscribe({
            next(result){
              console.log('Alterado com sucesso: ', result)
            },
            error(err){
              console.error('Algo de errado aconteceu: ', err)
            },
            complete(){
              console.log('Finalizado.')
            }
          })
      }else{
        console.log('Comparou e não mudou nada!');
        return 404;
      }
    })}}
=======
  updateTasks(id: number, columnId: number){
    const updatedColumn = {"colunaId": columnId}
    this.http.patch(`${this.apiUrl}/tasks/${id}`, updatedColumn).subscribe({
      next(res){
        console.log("Resposta: ", res);
      }, error(err){
        console.error("Erro: ", err)
      }
    })
  }

}
>>>>>>> Stashed changes
