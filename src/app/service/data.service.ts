import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly GIF_URL = 'https://api.giphy.com/v1/gifs/';
  apiKey = 'gbpcbD2Y0Sm2BX6LGa9LXcf2kumu1l45';

  constructor(private http: HttpClient) { }

  getRandomGif() {
    return this.http.get(this.GIF_URL + 'random?api_key=' + this.apiKey);
  }

  getGifsByPhrase(seachPhrase: string) {
    return this.http.get(this.GIF_URL + 'search?api_key=' + this.apiKey + '&q=' + seachPhrase + '&limit=50');
  }

  getTrendingGifs() {
    return this.http.get(this.GIF_URL + 'trending?api_key=' + this.apiKey + '&limit=50');
  }
}
