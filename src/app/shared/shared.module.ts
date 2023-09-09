import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  exports: [
    Error404PageComponent
  ],
  declarations: [
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
