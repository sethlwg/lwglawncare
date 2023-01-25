import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [ContactComponent],
  exports:[ContactComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ]
})
export class ContactModule { }
