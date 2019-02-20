import {Component, OnInit} from '@angular/core';
import {Promotion} from '../../model/promotion';
import {PromotionService} from '../service/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  private promotions: Promotion[];
  private _date: Date = new Date();
  private _test: Date = new Date();

  constructor(private promotionService: PromotionService) {
  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.promotionService.findAll().subscribe(result => {
      console.log(result);
      this.promotions = result;
    });
  }

  delete(id: number) {
    this.promotionService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }


  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }


  get test(): Date {
    return this._test;
  }

  set test(value: Date) {
    this._test = value;
  }
}
