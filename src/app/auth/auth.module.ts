import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent, LoginPageComponent, RegisterPageComponent } from './pages';


@NgModule({
  declarations: [
    LoginPageComponent,
    LayoutPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
