import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [CommonModule, IonicModule.forRoot(), CoreModule.forRoot(), AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
