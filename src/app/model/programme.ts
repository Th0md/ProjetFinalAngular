export class Programme {

  constructor(private _titre?: string){

  }


  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }
}
