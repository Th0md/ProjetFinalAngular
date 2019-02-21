import { Component, OnInit } from '@angular/core';
import {StagiaireService} from '../service/stagiaire.service';
import {Stagiaire} from '../../model/stagiaire';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  private stagiaires: Stagiaire[] = new Array();

  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.stagiaireService.findAll().subscribe(result => {
      console.log(result);
      this.stagiaires = result;
    });
  }

  delete(id: number) {
    this.stagiaireService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

}
