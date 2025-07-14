import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stories } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/stories';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Stories[]> {
    return this.http.get<Stories[]>(baseUrl);
  }

  get(id: any): Observable<Stories> {
    return this.http.get<Stories>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Stories[]> {
    return this.http.get<Stories[]>(`${baseUrl}?title=${title}`);
  }
}
