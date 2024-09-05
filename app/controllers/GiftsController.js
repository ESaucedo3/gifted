import {AppState} from '../AppState.js';
import {giftsService} from '../services/GiftsService.js';
import {Pop} from '../utils/Pop.js';

export class GiftsController {
  constructor() {
    console.log('Gifts Loaded');
    AppState.on('user', this.getGifts);
  }

  async getGifts() {
    try {
      await giftsService.getGifts();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawGifts() {}
}
