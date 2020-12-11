import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

// AT this point, we can interact with http.. further steps include getting the results page up
// and connecting to node backend server!

@Component({
  selector: 'app-parent',
  template: `<app-form (queried)="searchGif($event)"></app-form>
			<app-result [gifs]="video_urls"></app-result>`,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private giphyService: GiphyService) { }

  video_urls: string[] = [];
  cacheValue: any;

  ngOnInit(): void {
  }

  searchGif(keyword: string) {
  	this.video_urls = []; // to refresh after every search
  	this.giphyService.search(keyword).subscribe(
  		response => {
  			for (let d of response.data) {
  				this.video_urls.push(d['images']['original_mp4']['mp4']);
  			}
  		},
  		err => console.error("ERROR " + err),
  		() => {
  			console.log('Observer got a complete notification');
  		}
  	);
  }
}

