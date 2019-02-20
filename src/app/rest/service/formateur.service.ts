import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formateur} from '../../model/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('toto:toto')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projet/rest/formateurs/', {headers: this.headers});
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projet/rest/formateurs/${id}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projet/rest/formateurs/${id}`, {headers: this.headers});
  }

  public update(formateur: Formateur): Observable<any> {
    console.log(formateur);
    return this.http.put<any>(`http://localhost:8080/projet/rest/stagiaires/${formateur.id}`, formateur, {headers: this.headers});
  }

  public create(formateur: Formateur): Observable<any> {
    const f = {
      'id': formateur.id,
      'nom': formateur.nom,
      'prenom': formateur.prenom,
      'coordonnees': formateur.coordonnees,
      'rue': formateur.adresse.rue,
      'codePostal': formateur.adresse.codePostal,
      'ville': formateur.adresse.ville,
    };
    return this.http.post<any>(`http://localhost:8080/projet/rest/stagiaires`, f, {headers: this.headers});
  }
}
