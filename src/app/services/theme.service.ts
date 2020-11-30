import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(private storage: StorageService, private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  isStoredDark(): Promise<boolean> {
    return this.storage.getItem('theme').then((value) => {
      return value === 'dark' ? true : false;
    });
  }

  setStoredTheme() {
    this.storage.getItem('theme').then((value) => {
      if (value === 'dark') {
        this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      } // No need to else. Without attribute default light works.
    });
  }

  changeTheme(theme) {
    if (theme === 'dark') {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      this.storage.setItem('theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      this.storage.setItem('theme', 'light');
    }
  }
}
