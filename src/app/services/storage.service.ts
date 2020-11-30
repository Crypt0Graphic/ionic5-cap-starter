import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  async setItem(key, value) {
    await Storage.set({
      key,
      value
    });
  }

  async getItem(key) {
    const { value } = await Storage.get({ key });
    return await value;
  }
}
