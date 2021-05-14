const API_KEY = 'MMQ2M3AOTcNvFmVoIxNGUGotXqF5t9MP';
const BASE_URL = 'https://app.ticketmaster.com';

export default class EventsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchEvent() {
    const url = `${BASE_URL}/discovery/v2/events.json?keyword=${this.searchQuery}&size=20&page=${this.page}&apikey=${API_KEY}`;
    const rawResult = await fetch(url);
    if (!rawResult.ok) {
      throw rawResult;
    }

    const result = await rawResult.json();
    
    // зразу повертаємо масив подій
    return result._embedded.events;
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


