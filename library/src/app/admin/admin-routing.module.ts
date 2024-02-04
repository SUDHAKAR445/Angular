import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookCreateComponent } from './components/books/book-create/book-create.component';
import { BookUpdateComponent } from './components/books/book-update/book-update.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo:'dashboard', pathMatch:'full'},
      { path: 'dashboard', component: DashboardContentComponent},
      {
        path: 'books',
        component: BookListComponent,
        children: [
          { path: 'list', component: BookListComponent },
          { path: 'create', component: BookCreateComponent },
          { path: 'update/:id', component: BookUpdateComponent },
        ],
      },
      {
        path: 'users',
        component: UserListComponent,
        children: [
          { path: 'list', component: UserListComponent },
          { path: 'create', component: UserCreateComponent },
          { path: 'update/:id', component: UserUpdateComponent },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
