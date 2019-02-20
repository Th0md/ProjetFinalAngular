import { Component, OnInit } from '@angular/core';
import {Module} from '../../../model/module';
import {ModuleService} from '../../service/module.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit {

  private module: Module = new Module();
  private edit = false;

  constructor(private moduleService: ModuleService, private  activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.moduleService.findById(params.id).subscribe(result => {
          this.module = result;
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
    this.moduleService.create(this.module).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    this.moduleService.update(this.module).subscribe(result => {
      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/module']);
  }

}
