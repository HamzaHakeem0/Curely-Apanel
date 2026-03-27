import { Routes } from '@angular/router';
import { VerticalLayout } from './Core/Layouts/vertical-layout/vertical-layout';
import { AuthLayout } from './Core/Layouts/Auth-Layout/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirectTo: 'Sign-In',
        pathMatch: 'full'
      },
      {
        path: 'Sign-In',
        loadComponent: () =>
          import('./Components/Authentication/sign-in/sign-in')
            .then((c) => c.SignIn)
      },
     
    ]
  },

 {
    path: 'dashboard',
    component: VerticalLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./Components/Dashboard/dashboard/dashboard')
            .then(c => c.Dashboard)
      },
      // add more clinical child routes here
    ]
  },
  {
    path: 'appointment',
    component: VerticalLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./Components/appointment/appointment')
            .then(c => c.Appointment)
      },
    ]
  },
{
    path: 'patient-history',
    component: VerticalLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./Components/patint-history/patint-history')
            .then(c => c.PatintHistory)
      },
    ]
  },
{
    path: 'assistant-linking',
    component: VerticalLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./Components/assistant-linking/assistant-linking')
            .then(c => c.AssistantLinking)
      },
    ]
  },
];
