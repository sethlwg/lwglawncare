import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() hamburgerClick = new EventEmitter<void>();

  onHamburgerClick() {
    this.hamburgerClick.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
