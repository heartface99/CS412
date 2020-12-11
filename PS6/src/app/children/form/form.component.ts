import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  keyword : string = '';
  @Output() queried: EventEmitter<string> = new EventEmitter<string>();

  query(): void {
  	this.queried.emit(this.keyword);
  }
  constructor() { }


  ngOnInit(): void {
  }
}
