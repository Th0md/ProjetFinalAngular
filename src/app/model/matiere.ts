import {Programme} from './programme';
import {Formateur} from './formateur';
import {Module} from './module';

export class Matiere {

  private _programmes: Programme[];
  private _formateurs: Formateur[];
  private _modules: Module[];


  constructor(private _id?: number, private _nomMatiere?: string) {
    this._id = _id;
    this._nomMatiere = _nomMatiere;
  }

  get programmes(): Programme[] {
    return this._programmes;
  }

  set programmes(value: Programme[]) {
    this._programmes = value;
  }

  get formateurs(): Formateur[] {
    return this._formateurs;
  }

  set formateurs(value: Formateur[]) {
    this._formateurs = value;
  }

  get modules(): Module[] {
    return this._modules;
  }

  set modules(value: Module[]) {
    this._modules = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get nomMatiere(): string {
    return this._nomMatiere;
  }

  set nomMatiere(value: string) {
    this._nomMatiere = value;
  }
}
