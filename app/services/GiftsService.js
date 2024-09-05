import { AppState } from '../AppState.js';
import { Gift } from '../models/Gift.js';
import { api } from './AxiosService.js';

class GiftsService {
  async getGifts() {
    const response = await api.get('api/gifts');
    console.log(response.data);
    const gifts = response.data.map((giftData) => new Gift(giftData));
    AppState.gifts = gifts;
  }


  async openGift(giftId) {
    const gifts = AppState.gifts
    const giftIndex = gifts.findIndex(gift => giftId === gift.id)
    const gift = gifts[giftIndex]
    const giftdata = { opened: !gift.opened }
    const response = await api.put(`api/gifts/${giftId}`, giftdata)
    const updatedgift = new Gift(response.data);
    gifts.splice(giftIndex, 1, updatedgift)
    console.log(gifts, response.data)

  }
}

export const giftsService = new GiftsService();
