import { Component, OnInit } from '@angular/core';
import {Module} from '../../model/module';
import {ModuleService} from '../service/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  private modules: Module[];

  constructor(private moduleService: ModuleService) { }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.moduleService.findAll().subscribe(result => {
      console.log(result);
      this.modules = result._embedded.modules;
    });
  }

  delete(id: number) {
    this.moduleService.delete(id).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

}
