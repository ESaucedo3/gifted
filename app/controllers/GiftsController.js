import {AppState} from '../AppState.js';
import {giftsService} from '../services/GiftsService.js';
import {Pop} from '../utils/Pop.js';
import {setHTML} from '../utils/Writer.js';

export class GiftsController {
  constructor() {
    console.log('Gifts Loaded');
    AppState.on('user', this.getGifts);
    AppState.on('gifts', this.drawGifts);
  }

  async getGifts() {
    try {
      await giftsService.getGifts();
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  async openGift(giftId) {
    try {
      console.log('Received', giftId);
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  drawGifts() {
    const gifts = AppState.gifts;
    let giftsContent = '';
    gifts.forEach((gift) => (giftsContent += gift.GiftCardTemplate));
    setHTML('gifts', giftsContent);
  }
}
