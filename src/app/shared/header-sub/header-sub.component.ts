import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.scss'],
})
export class HeaderSubComponent implements OnInit {
  @Input() titleSub: string;

  constructor() { }

  ngOnInit() {}

}
