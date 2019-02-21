import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stagiaire} from '../../../model/stagiaire';
import {StagiaireService} from '../../service/stagiaire.service';
import {Adresse} from '../../../model/adresse';

@Component({
  selector: 'app-edit-stagiaire',
  templateUrl: './edit-stagiaire.component.html',
  styleUrls: ['./edit-stagiaire.component.css']
})
export class EditStagiaireComponent implements OnInit {

  private stagiaire: Stagiaire = new Stagiaire();
  private edit = false;

  //private adresse: Adresse = new Adresse();

  constructor(private stagiaireService: StagiaireService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        console.log(this.edit);
        this.stagiaireService.findById(params.id).subscribe(result => {
          this.stagiaire = result;
          console.log(this.stagiaire);
        });
      }
    });
    console.log('valeur edit');
    console.log(this.edit);
  }

  public save() {
    if (this.edit === true) {
      this.update();
      console.log('ici update');
      console.log(this.edit);
      console.log((this.stagiaire));
    } else {
      console.log('ici create');
      this.create();
      console.log(this.edit);
    }
  }

  private create() {
    this.stagiaireService.create(this.stagiaire).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    console.log(('update2'));
    console.log((this.stagiaire));
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
