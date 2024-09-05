import {AppState} from '../AppState.js';
import {giftsService} from '../services/GiftsService.js';
import {getFormData} from '../utils/FormHandler.js';
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

  async createGift() {
    try {
      event.preventDefault();
      const form = event.target;
      const giftFormData = getFormData(form);
      await giftsService.createGift(giftFormData);
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  async openGift(giftId) {
    try {
      await giftsService.openGift(giftId);
    } catch (e) {
      Pop.error(e);
      console.error(e);
    }
  }

  async searchGif() {
    try {
      // @ts-ignore
      const result = document.getElementById('result').value;
      await giftsService.searchGif(result);
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
