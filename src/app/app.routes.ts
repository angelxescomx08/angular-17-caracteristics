import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ).then((c) => c.ChangeDetectionComponent),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component').then(
            (c) => c.ControlFlowComponent
          ),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import(
            './dashboard/pages/defer-options/defer-options.component'
          ).then((c) => c.DeferOptionsComponent),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component').then(
            (c) => c.DeferViewsComponent
          ),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () =>
          import('./dashboard/pages/user/user.component').then(
            (c) => c.UserComponent
          ),
      },
      {
        path: 'users-list',
        title: 'Users List',
        loadComponent: () =>
          import('./dashboard/pages/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition1.component'
          ).then((c) => c.ViewTransitionComponent1),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition2.component'
          ).then((c) => c.ViewTransitionComponent2),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'change-detection',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
];
