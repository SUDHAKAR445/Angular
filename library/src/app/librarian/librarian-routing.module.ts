import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrarianDashboardComponent } from './components/librarian-dashboard/librarian-dashboard.component';

const routes: Routes = [
  {
    path: 'librarian',
    component: LibrarianDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrarianRoutingModule { }
