export class Promotion {

  constructor(private _debut?: Date, private _fin?: Date, private _nom?: string) {

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
}
