import { Component, OnInit } from '@angular/core';
import {ProgrammeService} from '../../service/programme.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Promotion} from '../../../model/promotion';
import {PromotionService} from '../../service/promotion.service';

@Component({
  selector: 'app-edit-promotion',
  templateUrl: './edit-promotion.component.html',
  styleUrls: ['./edit-promotion.component.css']
})
export class EditPromotionComponent implements OnInit {

  private promotion: Promotion = new Promotion();
  private edit = false;

  constructor(private promotionService: PromotionService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.promotionService.findById(params.id).subscribe(result => {
          this.promotion = result;
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
    this.promotionService.create(this.promotion).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    this.promotionService.update(this.promotion).subscribe(result => {
      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/promotion']);
  }

}
