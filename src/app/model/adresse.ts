export class Adresse {

  constructor(private _id?: number, private _rue?: string, private _codePostal?: string, private _ville?: string){}


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get codePostal(): string {
    return this._codePostal;
  }

  set codePostal(value: string) {
    this._codePostal = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }
}
