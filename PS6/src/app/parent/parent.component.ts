import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-parent',
  template: `<app-form (queried)="searchGif($event)"></app-form>
			<app-result [gifs]="videoUrls"></app-result>
      <p>{{ cached }}<p>`,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private giphyService: GiphyService) { }

  videoUrls: string[] = [];
  cached: string = '';

  ngOnInit(): void {
  }

  searchGif(keyword: string) {
  	this.videoUrls = []; // to refresh after every search
  	this.giphyService.search(keyword).subscribe(
  		response => {
        if (response.cached == true) {
          this.cached = 'This result is from cache on the backend!'; 
        } else { 
          this.cached = 'From a third-party API call!';
        }

  			for (let d of response.gifData.data) {
  				this.videoUrls.push(d['images']['original_mp4']['mp4']);
  			}
  		},
  		err => console.error("ERROR " + err),
  		() => {}
  	);
  }
}

