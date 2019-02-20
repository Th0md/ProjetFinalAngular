import {Programme} from './programme';

export class Promotion {

  constructor(private _id?: number, private _nom?: string, private _debut?: Date, private _fin?: Date, private _programme?: Programme) {

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

  get programme(): Programme {
    return this._programme;
  }

  set programme(value: Programme) {
    this._programme = value;
  }
}
