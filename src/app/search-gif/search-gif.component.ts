import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent implements OnInit {

  gifs: any = Object;
  phrase: string;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  onGetGifsByPhrase() {
    if (this.phrase !== '') {
      this.service.getGifsByPhrase(this.phrase).subscribe(response => {
        this.gifs = response;
        this.phrase = null;
      });
    }
  }

}
