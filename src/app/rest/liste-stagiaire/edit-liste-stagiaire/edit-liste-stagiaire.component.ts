import {Component, OnInit} from '@angular/core';
import {Stagiaire} from '../../../model/stagiaire';
import {StagiaireService} from '../../service/stagiaire.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ordinateur} from '../../../model/ordinateur';
import {OrdinateurService} from '../../service/ordinateur.service';

@Component({
  selector: 'app-edit-liste-stagiaire',
  templateUrl: './edit-liste-stagiaire.component.html',
  styleUrls: ['./edit-liste-stagiaire.component.css']
})
export class EditListeStagiaireComponent implements OnInit {

  private stagiaire: Stagiaire = new Stagiaire();
  private edit = false;
  private ordinateurs: Ordinateur[];

  constructor(private stagiaireService: StagiaireService, private activatedRoute: ActivatedRoute, private router: Router,
              private ordinateurService: OrdinateurService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.stagiaireService.findById(params.id).subscribe(result => {
          this.stagiaire = result;
        });
      }
      this.ordinateurService.findAll().subscribe(result => {
        this.ordinateurs = result;
      });
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
    this.router.navigate(['/listestagiaire']);
  }

}

