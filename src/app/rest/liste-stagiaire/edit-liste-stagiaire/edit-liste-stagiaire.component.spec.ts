import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListeStagiaireComponent } from './edit-liste-stagiaire.component';

describe('EditListeStagiaireComponent', () => {
  let component: EditListeStagiaireComponent;
  let fixture: ComponentFixture<EditListeStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListeStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListeStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
