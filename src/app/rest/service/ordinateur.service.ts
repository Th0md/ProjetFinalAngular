import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ordinateur} from '../../model/ordinateur';


@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('tiphaine:tiphaine')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projet/rest/ordinateur/list', {headers: this.headers});
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projet/rest/ordinateur/${id}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projet/rest/ordinateur/delete/${id}`, {headers: this.headers});
  }

  public update(ordinateur: Ordinateur): Observable<any> {
    console.log(ordinateur);
    return this.http.put<any>(`http://localhost:8080/projet/rest/ordinateur/update`, ordinateur, {headers: this.headers});
  }

  public create(ordinateur: Ordinateur): Observable<any> {
    const s = {
      'id': ordinateur.id
    };
    return this.http.post<any>(`http://localhost:8080/projet/rest/ordinateur/insert`, s, {headers: this.headers});
  }
}

