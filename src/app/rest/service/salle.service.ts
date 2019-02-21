import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formateur} from '../../model/formateur';
import {Salle} from '../../model/salle';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('tutu:tutu')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projet/rest/salle/', {headers: this.headers});
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projet/rest/salles/${id}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projet/rest/salles/${id}`, {headers: this.headers});
  }

  public update(salle: Salle): Observable<any> {
    console.log(salle);
    return this.http.put<any>(`http://localhost:8080/projet/rest/salles/${salle.id}`, salle, {headers: this.headers});
  }

  public create(salle: Salle): Observable<any> {
    const s = {
      'id': salle.id,
      'code': salle.code,
      'cout': salle.cout,
      'disponibilite': salle.disponibilite,
      'capacite': salle.capacite,
    };
    return this.http.post<any>(`http://localhost:8080/projet/rest/salles`, s, {headers: this.headers});
  }
}
