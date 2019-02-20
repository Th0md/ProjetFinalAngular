import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Promotion} from '../../model/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('toto:toto')
      }
    );

  }

  public findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/projet/rest/promotions/', {headers: this.headers});
  }

  public findById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/projet/rest/promotions/${id}`, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`
    http://localhost:8080/projet/rest/promotions/${id}`, {headers: this.headers});
  }

  public update(promotion: Promotion): Observable<any> {
    console.log(promotion);
    return this.http.put<any>(`http://localhost:8080/projet/rest/promotions/${promotion.id}`, promotion, {headers: this.headers});
  }

  public create(promotion: Promotion): Observable<any> {
    const s = {
      'id': promotion.id,
      'nom': promotion.nom,
      'debut': promotion.debut,
      'fin': promotion.fin,
    };
    return this.http.post<any>(`http://localhost:8080/projet/rest/promotions`, s, {headers: this.headers});
  }
}
