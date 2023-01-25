import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from './pages/home/home.module';
import { ContactModule } from './pages/contact/contact.module';
import { AboutModule } from './pages/about/about.module';
import { ServicesModule } from './pages/services/services.module';
import { GalleryModule } from './pages/gallery/gallery.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './sharedpages/header/header.component';
import { FooterComponent } from './sharedpages/footer/footer.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, HeaderComponent, FooterComponent, SidenavComponent],
  exports: [PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
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
    MatSidenavModule,
    FlexLayoutModule
  ],
})
export class AppModule {}
