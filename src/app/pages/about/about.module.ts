import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent],

  imports: [CommonModule, AppRoutingModule],
})
export class AboutModule {}
