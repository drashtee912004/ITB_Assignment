import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { PasswordComponent } from './auth-user/password/password.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgotpasswordComponent } from './auth-user/forgotpassword/forgotpassword.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'forgotpassword', component:ForgotpasswordComponent  },
];