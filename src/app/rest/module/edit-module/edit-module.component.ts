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
  }

}
