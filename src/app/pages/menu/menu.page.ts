import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';
  image: string;

  pages = [
    {
      title: 'MENÜ_T',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'GERİBİLDİRİM_T',
      url: '/menu/feedback',
      icon: 'chatbox'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
