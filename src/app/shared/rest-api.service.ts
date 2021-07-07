import { Tarefa } from './tarefa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  apiURL = 'http://localhost:3000';

  constructor(private http:HttpClient) {}

  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'})
  }

  getTarefas():Observable<Tarefa>{
    return this.http.get<Tarefa>(this.apiURL + '/tarefas')
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  getTarefa(id:number):Observable<Tarefa>{
    return this.http.get<Tarefa>(this.apiURL + '/tarefas/' +id)
      .pipe(
        retry(1),
        catchError(this.handleError))
  }

  createTarefa(tarefa:any): Observable<Tarefa>{
    return this.http.post<Tarefa>(this.apiURL +'/tarefas', JSON.stringify(tarefa), this.httpHeaders)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateTarefa(id:number, tarefa:Tarefa): Observable<Tarefa>{
    return this.http.put<Tarefa>(this.apiURL +'/tarefas/' +id,
      JSON.stringify(tarefa), this.httpHeaders)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
  }

  deleteTarefa(id:number){
    return this.http.delete<Tarefa>(this.apiURL +'/tarefas/' +id,
      this.httpHeaders)
      .pipe(retry(1),
      catchError(this.handleError))
  }

  // Error handling (Manipulador de erro)
  handleError(error:any) {
    let errorMessage = 'Um erro foi detectado conforme informações a seguir:\n';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
       // Get server-side error (manipulador de erro do servidor)
       errorMessage = `Codigo do erro: ${error.status}\nMensagem: ${error.message}`;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
