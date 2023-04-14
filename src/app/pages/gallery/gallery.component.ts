import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor() {}
  images = [
    {
      beforeImage: 'assets/IMG_3165.JPG',
      afterImage: 'assets/IMG_3196.JPG',
      caption: 'Flowerbed 1',
    },
    {
      beforeImage: 'assets/IMG_2871.JPG',
      afterImage: 'assets/IMG_2885.JPG',
      caption: 'Flowerbed 2',
    },
  ];
  lawns = [
    { lawn: 'assets/IMG_9188.JPG', caption: 'client 1' },
    { lawn: 'assets/IMG_9181.JPG', caption: 'client 2' },
    { lawn: 'assets/IMG_8947.JPG', caption: 'client 3' },
    { lawn: 'assets/IMG_8949.JPG', caption: 'client 4' },
    { lawn: 'assets/IMG_2236.JPG', caption: 'client 5' },
    { lawn: 'assets/IMG_2685.JPG', caption: 'client 6' },
  ];

  ngOnInit(): void {}
}
