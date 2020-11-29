import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
