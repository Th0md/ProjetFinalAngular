export class Module {

  constructor(private _id?: number, private _debut?: Date, private _fin?: Date){}


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
}
