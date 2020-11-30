import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocaleService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localeService: LocaleService
  ) {
    this.initializeApp();
    this.initTranslation();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initTranslation() {
    // Register all Locales in LocaleService
    this.localeService.registerLocales();
    // Get and Set Stored Locale
    this.localeService.getStoredLocale().then((value) => {
      if (value) {
        this.localeService.setLang(value);
      } else {
        this.localeService.setDefault();
      }
    });
  }
}
