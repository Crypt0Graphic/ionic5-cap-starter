import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from '../../services';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  locale: string;
  date = new Date();
  number = 1000.5;
  actionSheetOptionsLang: any = {};

  constructor(public translate: TranslateService, public localeService: LocaleService) {}

  ngOnInit() {
    this.localeService.getStoredLocale().then((value) => {
      this.locale = value;
    });
  }

  changeLocale(event) {
    this.localeService.setLang(event.target.value);
  }
}
