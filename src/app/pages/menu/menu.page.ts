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
      title: 'HOME',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'FEEDBACK',
      url: '/menu/feedback',
      icon: 'chatbox'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
