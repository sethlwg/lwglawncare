import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent],
  imports: [CommonModule, FormsModule],
})
export class ContactModule {
  firstName!: string;
  lastName!: string;
  email!: string;
  message!: string;
  phone!: string;

  submitForm() {}
}
