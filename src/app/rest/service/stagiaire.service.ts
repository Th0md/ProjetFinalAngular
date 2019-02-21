import {Injectable} from '@angular/core';
import {Stagiaire} from '../../model/stagiaire';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('tutu:tutu')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projet/rest/stagiaire/', {headers: this.headers});
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projet/rest/stagiaire/${id}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projet/rest/stagiaire/delete/${id}`, {headers: this.headers});
  }

  public update(stagiaire: Stagiaire): Observable<any> {
    console.log(stagiaire);
    return this.http.put<any>(`http://localhost:8080/projet/rest/stagiaire/update`, stagiaire, {headers: this.headers});
  }

  public create(stagiaire: Stagiaire): Observable<any> {
    const s = {
      'id': stagiaire.id,
      'nom': stagiaire.nom,
      'prenom': stagiaire.prenom,
      'coordonnees': stagiaire.coordonnees,
      'rue': stagiaire.adresse.rue,
      'codePostal': stagiaire.adresse.codePostal,
      'ville': stagiaire.adresse.ville,
    };
    return this.http.post<any>(`http://localhost:8080/projet/rest/stagiaire/insert`, s, {headers: this.headers});
  }
}
