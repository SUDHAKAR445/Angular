import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { TermsComponent } from './terms/terms.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from '../authentication/login/login.component';
import { SignupComponent } from '../authentication/signup/signup.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'terms', pathMatch: 'full' },
            { path: 'terms', component: TermsComponent },
            { path: 'service', component: ServiceComponent },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
