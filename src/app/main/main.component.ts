import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gif: [];
  WELCOME_IMG_URL = 'https://media.giphy.com/media/xUySTQZfdpSkIIg88M/giphy.gif';

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  onGetRandomGif() {
    this.service.getRandomGif().subscribe((response: any) => {
      this.gif = response.data.images.original.url;
    });
  }

}
