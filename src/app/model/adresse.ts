export class Adresse {

  constructor() {
  }

  private _rue: string;

  private _ville: string;

  private _CP: string;


  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get CP(): string {
    return this._CP;
  }

  set CP(value: string) {
    this._CP = value;
  }
}
