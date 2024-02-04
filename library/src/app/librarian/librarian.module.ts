import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrarianRoutingModule } from './librarian-routing.module';
import { LibrarianDashboardComponent } from './components/librarian-dashboard/librarian-dashboard.component';


@NgModule({
  declarations: [
    LibrarianDashboardComponent
  ],
  imports: [
    CommonModule,
    LibrarianRoutingModule
  ]
})
export class LibrarianModule { }
