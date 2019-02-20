import { Component, OnInit } from '@angular/core';
import {Formateur} from '../../model/formateur';
import {FormateurService} from '../service/formateur.service';


@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  private formateurs: Formateur[];

  constructor(private formateurService: FormateurService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.formateurService.findAll().subscribe(result => {
      console.log(result);
      this.formateurs = result._embedded.formateurs;
    });
  }

  delete(id: number) {
    this.formateurService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }
}
