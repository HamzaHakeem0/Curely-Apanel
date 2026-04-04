import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-appointment',
  imports: [],
  templateUrl: './add-edit-appointment.html',
  styleUrl: './add-edit-appointment.scss',
})
export class AddEditAppointment {

constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
