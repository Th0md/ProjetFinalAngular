import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../../model/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('toto:toto')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projet/rest/modules/', {headers: this.headers});
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projet/rest/modules/${id}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projet/rest/modules/${id}`, {headers: this.headers});
  }

  public update(module: Module): Observable<any> {
    console.log(module);
    return this.http.put<any>(`http://localhost:8080/projet/rest/modules/${module.id}`, module, {headers: this.headers});
  }

  public create(module: Module): Observable<any> {
    const m = {
      'id': module.id,
      'debut': module.debut,
      'fin': module.fin,
    };
    return this.http.post<any>(`http://localhost:8080/projet/rest/modules`, m, {headers: this.headers});
  }
}
