import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  map: any;
  constructor() {}

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyD4w8NBWW1FUWStxRjWEkVdArbiuMFQD_4&libraries=places';
    script.onload = () => {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 32.8861731, lng: -97.3254091 },
        zoom: 10,
      });
    };
    document.body.appendChild(script);
  }
}
