import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookCreateComponent } from './components/books/book-create/book-create.component';
import { BookUpdateComponent } from './components/books/book-update/book-update.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
    UserCreateComponent,
    UserListComponent,
    UserUpdateComponent,
    SideBarComponent,
    DashboardContentComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
