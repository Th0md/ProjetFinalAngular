import { Component, OnInit } from '@angular/core';
import {Salle} from '../../model/salle';
import {SalleService} from '../service/salle.service';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  private salles: Salle[];

  constructor(private salleService: SalleService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.salleService.findAll().subscribe(result => {
      console.log(result);
      this.salles = result._embedded.salles;
    });
  }

  delete(id: number) {
    this.salleService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

}
