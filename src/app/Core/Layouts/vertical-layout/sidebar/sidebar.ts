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
    { name: 'Patients', icon: 'bi bi-people', url: '/patients' },
    { name: 'Schedule', icon: 'bi bi-calendar3', url: '/schedule' },
    { name: 'Schedule', icon: 'bi bi-calendar3', url: '/schedule' },
  ];
}
