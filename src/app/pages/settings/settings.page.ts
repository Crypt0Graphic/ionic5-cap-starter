import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService, ThemeService } from '../../services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  locale: string;
  isDark: boolean;
  actionSheetOptionsLang: any = {};

  // Sample Values
  date = new Date();
  number = 1000.5;

  constructor(public translate: TranslateService, public localeService: LocaleService, private themeService: ThemeService) {}

  ngOnInit() {
    this.localeService.getStoredLocale().then((value) => {
      this.locale = value;
    });

    this.themeService.isStoredDark().then((value) => {
      this.isDark = value;
    });
  }

  changeLocale(event) {
    this.localeService.setLang(event.target.value);
  }

  changeTheme(event) {
    if (event.detail.checked) {
      this.themeService.changeTheme('dark');
    } else {
      this.themeService.changeTheme('light');
    }
  }
}
