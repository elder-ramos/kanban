import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quadro } from '../models/quadro.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/quadro'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Quadro>{
    return this.http.get<Quadro>(this.apiUrl);
  }

}
