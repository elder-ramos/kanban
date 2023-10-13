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

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get<any>(url)
  }

  getAll(): Observable<Quadro>{
    return this.http.get<Quadro>(`${this.apiUrl}/quadros`);
  }

  createColuna(coluna: Coluna){
    console.log(coluna)
    // return this.http.post<Coluna[]>(`${this.apiUrl}/colunas`, coluna)
  }

  createTask(task:Task){
    return this.http.post(`${this.apiUrl}/tasks`, task)
  }

  updateTasks(){
    console.log(this.http.get(this.apiUrl, {}))
  }

}
