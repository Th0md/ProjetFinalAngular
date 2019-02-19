export class Module {

  constructor(private _debut?: Date, private _fin?: Date){}


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
}
