import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationLayoutComponent } from './components/authentication-layout/authentication-layout.component';
import { AdminModule } from '../admin/admin.module';
import { LibrarianModule } from '../librarian/librarian.module';
import { MemberModule } from '../member/member.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AuthenticationLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AdminModule,
    MemberModule,
    LibrarianModule
  ]
})
export class AuthenticationModule { }
