import { Component, OnInit } from '@angular/core';
import {Programme} from '../../../model/programme';
import {ProgrammeService} from '../../service/programme.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-programme',
  templateUrl: './edit-programme.component.html',
  styleUrls: ['./edit-programme.component.css']
})
export class EditProgrammeComponent implements OnInit {

  private programme: Programme = new Programme();
  private edit = false;

  constructor(private programmeService: ProgrammeService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        this.programmeService.findById(params.id).subscribe(result => {
          this.programme = result;
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
    this.programmeService.create(this.programme).subscribe(result => {
      this.goList();
    });
  }

  private update() {
    this.programmeService.update(this.programme).subscribe(result => {
      this.goList();
    });
  }


  public cancel() {
    this.goList();
  }

  private goList() {
    this.router.navigate(['/programme']);
  }

}
