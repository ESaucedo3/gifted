import {AppState} from '../AppState.js';
import {Gift} from '../models/Gift.js';
import {api} from './AxiosService.js';

class GiftsService {
  async getGifts() {
    const response = await api.get('api/gifts');
    console.log(response.data);
    const gifts = response.data.map((giftData) => new Gift(giftData));
    AppState.gifts = gifts;
  }
}

export const giftsService = new GiftsService();
