import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('scaleAnimation', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.2)'
      })),
      transition('initial=>final', animate('200ms ease-in')),
      transition('final=>initial', animate('200ms ease-out'))
    ])
  ]
})

export class FooterComponent implements OnInit {
    socialInfo: Array<{ icon: string; link: string; }>;
    state!: 'initial';
    
  constructor() { 
    this.socialInfo= [
        { icon: 'facebook', link: '#' },
        { icon: 'youtube', link: '#' },
        { icon: 'twitter', link: '#' },
        { icon: 'whatsapp', link: '#' }
    ];
    
  }

  ngOnInit(): void {
  }


}
