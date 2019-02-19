import { Component, OnInit } from '@angular/core';
import {Adresse} from '../../model/adresse';
import {AdresseService} from '../service/adresse.service';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {

  private adresses: Adresse[];

  constructor(private adresseService: AdresseService) { }

  ngOnInit() {
  }

}
