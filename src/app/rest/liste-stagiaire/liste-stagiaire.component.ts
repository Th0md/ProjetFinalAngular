import {Component, OnInit} from '@angular/core';
import {Stagiaire} from '../../model/stagiaire';
import {StagiaireService} from '../service/stagiaire.service';

import {Promotion} from '../../model/promotion';
import {PromotionService} from '../service/promotion.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-liste-stagiaire',
  templateUrl: './liste-stagiaire.component.html',
  styleUrls: ['./liste-stagiaire.component.css']
})
export class ListeStagiaireComponent implements OnInit {

  private _listeStagiaire: Stagiaire[];
  private promotion: Promotion;


  get listeStagiaire(): Stagiaire[] {
    return this._listeStagiaire;
  }

  set listeStagiaire(value: Stagiaire[]) {
    this._listeStagiaire = value;
  }

  constructor(private promotionService: PromotionService,
              private activatedRoute: ActivatedRoute, private stagiaireService: StagiaireService) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.activatedRoute.params.subscribe(params =>
      this.promotionService.findById(params.id).subscribe(result => {
        console.log(result);
        this.promotion = result;
        this._listeStagiaire = this.promotion.stagiaires;
      }));
  }

  delete(id: number) {
    this.stagiaireService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

}

