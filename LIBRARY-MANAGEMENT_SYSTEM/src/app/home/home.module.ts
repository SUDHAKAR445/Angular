import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from '../authentication/login/login.component';
import { SignupComponent } from '../authentication/signup/signup.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        TermsComponent,
        ServiceComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        TermsComponent,
        ServiceComponent,
        LoginComponent,
        SignupComponent
    ],
})
export class HomeModule { }