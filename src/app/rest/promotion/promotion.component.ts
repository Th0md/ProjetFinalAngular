import { Component, OnInit } from '@angular/core';
import {Promotion} from '../../model/promotion';
import {PromotionService} from '../service/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  private promotions: Promotion[];

  constructor(private promotionService: PromotionService) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.promotionService.findAll().subscribe(result => {
      console.log(result);
      this.promotions = result._embedded.promotions;
    });
  }

  delete(id: number) {
    this.promotionService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

}
