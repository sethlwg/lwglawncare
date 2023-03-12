import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() hamburgerClick = new EventEmitter<void>();
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  openMenu() {
    setTimeout(() => {
      this.trigger.openMenu();
    }, 500);
  }

  closeMenu() {
    setTimeout(() => {
      this.trigger.closeMenu();
    }, 500);
  }

  onHamburgerClick() {
    this.hamburgerClick.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
