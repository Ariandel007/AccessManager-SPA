import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { UserUpdateComponent } from './user-update/user-update.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    // runGuardsAndResolvers: 'always',
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        component: UserListComponent,
        // resolve: { users: UserListResolver }
      },
      {
        path: 'createUser',
        component: RegisterComponent,
        // resolve: { users: UserListResolver }
      },
      {
        path: 'updateUser/:id',
        component: UserUpdateComponent,
        // resolve: { users: UserListResolver }
      },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
