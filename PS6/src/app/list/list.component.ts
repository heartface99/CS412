import { Component, OnInit } from '@angular/core';
import { gifs } from '../data/gifMock';
import { Gif } from '../data/Gif';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  gifs: Gif[] = gifs;
  gif: Gif;
  buttonMessage: string = 'Click here to see GIFs!';
  show: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
  }

  showGifs(): void {
    if (!this.show) {
      this.buttonMessage = 'Close';
    } else {
      this.buttonMessage = 'Click here to see GIFs!';
    }
    this.show = !this.show;
  }
}