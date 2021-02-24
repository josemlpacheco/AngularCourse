import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() name = new EventEmitter<string>();
  value='';
  constructor() { }

  ngOnInit(): void {
    
  }

  sendValue(){
    console.log('Soon:'+this.value);
    this.name.emit(this.value);
  }
  
}