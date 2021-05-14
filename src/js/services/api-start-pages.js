const API_KEY = 'MMQ2M3AOTcNvFmVoIxNGUGotXqF5t9MP';
const BASE_URL = 'https://app.ticketmaster.com';

export default class EventsApiService {
  constructor() {
    this.page = 3;
  }

  async fetchEvent() {
    const url = `${BASE_URL}/discovery/v2/events.json?size=20&page=${this.page}&apikey=${API_KEY}`;
    const rawResult = await fetch(url);
    if (!rawResult.ok) {
      throw rawResult;
    }

    const result = await rawResult.json();
    this.page += 1;
    return result;
  }
}