import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Programme} from '../../model/programme';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('tutu:tutu')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projet/rest/programmes/', {headers: this.headers});
  }

  public findById(code: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projet/rest/programmes/${code}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projet/rest/programmes/${id}`, {headers: this.headers});
  }

  public update(programme: Programme): Observable<any> {
    console.log(programme);
    return this.http.put<any>(`http://localhost:8080/projet/rest/programmes/${programme.titre}`, programme, {headers: this.headers});
  }

  public create(programme: Programme): Observable<any> {
    const p = {
      'titre': programme.titre
    };
    return this.http.post<any>(`http://localhost:8080/projet/rest/programmes`, p, {headers: this.headers});
  }

}
