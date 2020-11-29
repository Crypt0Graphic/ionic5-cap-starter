import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';

@NgModule({
  imports: [
    MenuPageRoutingModule,
    SharedModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
