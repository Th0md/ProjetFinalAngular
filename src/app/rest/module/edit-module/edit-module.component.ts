import {Component, OnInit} from '@angular/core';
import {Module} from '../../../model/module';
import {ModuleService} from '../../service/module.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Formateur} from '../../../model/formateur';
import {FormateurService} from '../../service/formateur.service';
import {Matiere} from '../../../model/matiere';
import {Promotion} from '../../../model/promotion';
import {PromotionService} from '../../service/promotion.service';
import {MatiereService} from '../../service/matiere.service';
import {Salle} from '../../../model/salle';
import {SalleService} from '../../service/salle.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  private _module: Module = new Module(null,null,null, new Formateur(), new Salle(), new Promotion());
  private _formateurs: Formateur[];
  private _matieres: Matiere [];
  private _promotions: Promotion [];
  private _salles: Salle[];
  private edit = false;

  constructor(private moduleService: ModuleService, private  activatedRoute: ActivatedRoute, private router: Router,
              private formateurService?: FormateurService, private promotionService?: PromotionService, private matiereService?: MatiereService,
              private salleService?: SalleService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.moduleService.findById(params.id).subscribe(result => {
          this._module = result;
        });
      }
      this.matiereService.findAll().subscribe(result => {
        this._matieres = result;
      });
      this.promotionService.findAll().subscribe(result => {
        this._promotions = result;
      });
      this.formateurService.findAll().subscribe(result => {
        this.formateurs = result;
      });
      this.salleService.findAll().subscribe(result => {
        this._salles = result;
      });

    });
  }

  get salles(): Salle[] {
    return this._salles;
  }

  set salles(value: Salle[]) {
    this._salles = value;
  }

  public save() {
    if (this.edit) {
      this.update();
      console.log('passe dans l update');
    } else {
      console.log('passe dans le create');
      this.create();
    }
  }

  private create() {
    this.moduleService.create(this._module).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    console.log('passe dans la méthode update');
    this.moduleService.update(this._module).subscribe(result => {

      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/module']);
  }


  get module(): Module {
    return this._module;
  }

  set module(value: Module) {
    this._module = value;
  }

  get formateurs(): Formateur[] {
    return this._formateurs;
  }

  set formateurs(value: Formateur[]) {
    this._formateurs = value;
  }

  get matieres(): Matiere[] {
    return this._matieres;
  }

  set matieres(value: Matiere[]) {
    this._matieres = value;
  }

  get promotions(): Promotion[] {
    return this._promotions;
  }

  set promotions(value: Promotion[]) {
    this._promotions = value;
  }
}
