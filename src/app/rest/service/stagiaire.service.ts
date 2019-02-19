import {Injectable} from '@angular/core';
import {Stagiaire} from '../../model/stagiaire';
import {Adresse} from '../../model/adresse';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor() {
    this.fakeList.push(new Stagiaire(1, 'Bidon', 'Toto', '0123456789', (new Adresse('Rue des Lilas', '75214', 'Villekonc'))));
    this.fakeList.push(new Stagiaire(2, 'Douillon', 'Bonno', '0214789658', (new Adresse('Rue Charles', '65498', 'Kooltown'))));
    this.fakeList.push(new Stagiaire(3, 'Carton', 'Marteau', '0321654987', (new Adresse('Rue des Kaplats', '32165', 'Golfville'))));
    this.fakeList.push(new Stagiaire(4, 'Lardon', 'Choufleur', '0789123456', (new Adresse('Rue du Ballet', '98765', 'Letrous'))));
  }

  private fakeList: Stagiaire[] = new Array();

  public findAll() {
    console.log(this.fakeList);
    return this.fakeList;
  }

  public findById(id: number) {

  }


  delete(id: number) {
    return this.fakeList.splice(id);
  }
}
