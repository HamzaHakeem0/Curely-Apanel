import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  activities = [
    { name: 'Dashboard', icon: 'bi bi-speedometer2', url: '/dashboard' },
    { name: 'Patients', icon: 'bi bi-people', url: '/patient-history' },
    { name: 'Assitant Linking', icon: 'bi bi-calendar3', url: '/assistant-linking' },
    { name: 'Appointment', icon: 'bi bi-calendar3', url: '/appointment' },
  ];
}
