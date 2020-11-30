import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  // First one will be used as DEFAULT
  locales = [
    { title: 'English', locale: 'en-US' },
    { title: 'Türkçe', locale: 'tr-TR' },
  ];

  private renderer: Renderer2;

  constructor(
    private translate: TranslateService,
    private storage: StorageService,
    public rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  getStoredLocale() {
    return this.storage.getItem('locale');
  }

  setDefault() {
    this.translate.use(this.locales[0].locale.substring(0, 2));
    this.updateHtmlLang(this.locales[0].locale.substring(0, 2));
    this.storage.setItem('locale', this.locales[0].locale);
  }

  setLang(locale: string) {
    this.translate.use(locale.substring(0, 2));
    this.updateHtmlLang(locale.substring(0, 2));
    this.storage.setItem('locale', locale);
  }

  registerLocales() {
    this.locales.forEach((item) =>
      import(`@angular/common/locales/${item.locale.substring(0, 2)}.js`).then((module) => registerLocaleData(module.default))
    );
  }

  // For special characters (For example Turkish "ı" Css Uppercase make it "İ" but should be "I")
  updateHtmlLang(locale): void {
    this.renderer.setAttribute(document.body.parentNode, 'lang', locale);
  }
}
