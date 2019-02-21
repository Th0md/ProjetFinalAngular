import {Stagiaire} from './stagiaire';

export class Promotion {
private _stagiaires: Stagiaire[];
  constructor(private _id?: number, private _nom?: string, private _debut?: Date, private _fin?: Date) {

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

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }


  get stagiaires(): Stagiaire[] {
    return this._stagiaires;
  }

  set stagiaires(value: Stagiaire[]) {
    this._stagiaires = value;
  }
}
