import { Component, OnInit } from '@angular/core';
import {StagiaireService} from '../service/stagiaire.service';
import {Stagiaire} from '../../model/stagiaire';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  private stagiaires: Stagiaire[];

  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit() {
  }

}
