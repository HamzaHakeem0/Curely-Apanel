import { Routes } from '@angular/router';
import { Empty } from './Core/Layouts/Empty/empty/empty';

import { VerticalLayout } from './Core/Layouts/vertical-layout/vertical-layout';

export const routes: Routes = [
  {
    path: '',
    component: Empty,
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
    path: 'assistant',
    component: VerticalLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./Components/assistant/assistant')
            .then(c => c.Assistant)
      },
    ]
  },


];
