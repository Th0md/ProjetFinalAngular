import {Injectable} from '@angular/core';
import {Stagiaire} from '../../model/stagiaire';
import {Adresse} from '../../model/adresse';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Programme} from "../../model/programme";

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('toto:toto')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projetfinal/api/stagiaires/', {headers: this.headers});
  }

  public findById(code: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projetfinal/api/stagiaires/${code}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projetfinal/api/stagiaires/${id}`, {headers: this.headers});
  }

  public update(stagiaire: Stagiaire): Observable<any> {
    console.log(stagiaire);
    return this.http.put<any>(`http://localhost:8080/projetfinal/api/stagiaires/${stagiaire.id}`, stagiaire, {headers: this.headers});
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
    return this.http.post<any>(`http://localhost:8080/projetfinal/api/stagiaires`, s, {headers: this.headers});
  }
}
