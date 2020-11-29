import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
