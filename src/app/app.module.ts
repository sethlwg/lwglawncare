import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { ServicesModule } from './services/services.module';
import { GalleryModule } from './gallery/gallery.module';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, GalleryComponent],
  exports: [PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    HomeModule,
    ContactModule,
    AboutModule,
    ServicesModule,
    GalleryModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
