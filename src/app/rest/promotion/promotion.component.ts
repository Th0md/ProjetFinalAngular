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
  }

}
