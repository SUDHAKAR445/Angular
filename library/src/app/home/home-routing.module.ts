import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeContentComponent},
      { path: 'service', component:  ServiceComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'about', component: AboutComponent},
      { path: 'terms', component: TermsComponent},
      { path: 'privacy-policy', component: PrivacyPolicyComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
