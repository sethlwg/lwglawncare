import { Component, OnInit, ViewChild} from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    @ViewChild('clickMe') clickMe: any;

    clickOnHover() {
      this.clickMe._elementRef.nativeElement.click();
    }
   
  constructor() {}

  ngOnInit(): void {}

}



