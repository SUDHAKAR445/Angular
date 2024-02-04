import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { AuthenticationModule } from '../authentication/authentication.module';


@NgModule({
  declarations: [
    HomeDashboardComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AuthenticationModule,
  ]
})
export class HomeModule { }
