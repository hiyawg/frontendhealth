import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinpatientComponent } from './checkinpatient.component';

describe('CheckinpatientComponent', () => {
  let component: CheckinpatientComponent;
  let fixture: ComponentFixture<CheckinpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
