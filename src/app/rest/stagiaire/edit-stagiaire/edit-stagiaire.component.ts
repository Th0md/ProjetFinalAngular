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
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.stagiaireService.findById(params.id).subscribe(result => {
          this.stagiaire = result;
        });
      }
    });
  }

  public save() {
    if (this.edit) {
      this.update();
    } else {
      this.create();
    }
  }

  private create() {
    this.stagiaireService.create(this.stagiaire).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    this.stagiaireService.update(this.stagiaire).subscribe(result => {
      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/stagiaire']);
  }

}
