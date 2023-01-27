import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NgxTypedJsModule} from 'ngx-typed-js';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, NgxTypedJsModule],
})
export class HomeModule {}
