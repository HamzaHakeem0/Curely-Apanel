import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAppointment } from './add-edit-appointment';

describe('AddEditAppointment', () => {
  let component: AddEditAppointment;
  let fixture: ComponentFixture<AddEditAppointment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditAppointment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAppointment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
