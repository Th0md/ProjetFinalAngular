import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  private headers: HttpHeaders;

  constructor(private http: HttpHeaders) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('user:user')
      }
    );
  }
}
