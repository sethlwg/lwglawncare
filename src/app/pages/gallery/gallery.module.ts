import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [GalleryComponent],
  exports: [GalleryComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule],
})
export class GalleryModule {}
