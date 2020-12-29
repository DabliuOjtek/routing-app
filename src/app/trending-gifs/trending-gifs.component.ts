import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-trending-gifs',
  templateUrl: './trending-gifs.component.html',
  styleUrls: ['./trending-gifs.component.css']
})
export class TrendingGifsComponent implements OnInit {

  gifs: any = Object;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getTrendingGifs().subscribe(response => {
      this.gifs = response;
    });
  }

}
