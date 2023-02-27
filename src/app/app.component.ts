import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showSidebar = false;

  onHamburgerClick() {
    this.showSidebar = !this.showSidebar;
  }

  onCloseSidebar() {
    this.showSidebar = false;
  }
  title = 'homepage';
}
