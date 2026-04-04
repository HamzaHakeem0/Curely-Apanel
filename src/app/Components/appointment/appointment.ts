import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditAppointment } from './add-edit-appointment/add-edit-appointment';

@Component({
  selector: 'app-appointment',
  imports: [],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class Appointment {
constructor(private dialog: MatDialog) {}
openDialog() {
  const dialogRef = this.dialog.open(AddEditAppointment, {
    width: '500px',
    data: {
      title: 'Add Appointment'
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed', result);
  });
}
  
}
