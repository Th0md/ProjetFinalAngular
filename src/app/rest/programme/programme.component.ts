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
  }

}
