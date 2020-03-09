import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoSrevice {
  constructor(private http: HttpClient) { }
  public getTodos(description = ''): Observable<any> {
    const search = description ? `&description__regex=/${description}/` : ''
    return this.http.get(`http://localhost:3003/api/todos` + search);
  }
  public mark(todo, choice: boolean = false): Promise<any> {
    return fetch(`http://localhost:3003/api/todos/${todo._id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: new URLSearchParams({...todo, done: choice})})
  }
}
