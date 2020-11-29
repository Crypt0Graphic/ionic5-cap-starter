import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { HeaderSubComponent } from './header-sub/header-sub.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderSubComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    HeaderComponent,
    HeaderSubComponent
  ]
})
export class SharedModule {}
