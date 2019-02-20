import { Component, OnInit } from '@angular/core';
import {Programme} from '../../model/programme';
import {ProgrammeService} from '../service/programme.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  private programmes: Programme[];

  constructor(private programmeService: ProgrammeService) {

  }

  ngOnInit() {
    this.list();
  }

  private list() {
    this.programmeService.findAll().subscribe(result => {
      console.log(result);
      this.programmes = result._embedded.programmes;
    });
  }

  delete(code: string) {
    this.programmeService.delete(code).subscribe(result => {
      this.list();
    }, error => {
      console.log(error);
    });
  }

}
