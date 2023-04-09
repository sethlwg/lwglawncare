import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor() {}
  lawns = [
    {
      title: 'front',
      image: 'assets/IMG_2236.JPG',
    },
  ];

  ngOnInit(): void {}
}
