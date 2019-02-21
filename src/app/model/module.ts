import {Formateur} from './formateur';
import {Salle} from './salle';
import {Promotion} from './promotion';
import {Matiere} from './matiere';

export class Module {

  private _matiere: Matiere;

  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }

  constructor(private _id?: number, private _debut?: Date, private _fin?: Date, private _formateur?: Formateur, private _salle?: Salle, private _promotion?: Promotion) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get debut(): Date {
    return this._debut;
  }

  set debut(value: Date) {
    this._debut = value;
  }

  get fin(): Date {
    return this._fin;
  }

  set fin(value: Date) {
    this._fin = value;
  }


  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }

  get salle(): Salle {
    return this._salle;
  }

  set salle(value: Salle) {
    this._salle = value;
  }

  get promotion(): Promotion {
    return this._promotion;
  }

  set promotion(value: Promotion) {
    this._promotion = value;
  }
}
