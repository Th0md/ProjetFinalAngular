import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stagiaire} from '../../../model/stagiaire';
import {StagiaireService} from '../../service/stagiaire.service';

@Component({
  selector: 'app-edit-stagiaire',
  templateUrl: './edit-stagiaire.component.html',
  styleUrls: ['./edit-stagiaire.component.css']
})
export class EditStagiaireComponent implements OnInit {

  private stagiaire: Stagiaire = new Stagiaire();
  private edit = false;

  constructor(private stagiaireService: StagiaireService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/stagiaire']);
  }

}
