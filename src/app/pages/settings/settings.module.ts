import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
