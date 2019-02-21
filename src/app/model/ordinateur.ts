import {Adresse} from './adresse';
import {Stagiaire} from './stagiaire';

export class Ordinateur {

  constructor(private _id?: number, private _stagiaire?: Stagiaire) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get stagiaire(): Stagiaire {
    return this._stagiaire;
  }

  set stagiaire(value: Stagiaire) {
    this._stagiaire = value;
  }
}
