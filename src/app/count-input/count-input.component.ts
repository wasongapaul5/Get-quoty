import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-count-input',
  templateUrl: './count-input.component.html',
  styleUrls: ['./count-input.component.css']
})
export class CountInputComponent implements OnInit {
@Input ()
counterValue = 0;

increment(){
  this.counterValue++;
}
decrement(){
  this.counterValue--;
}
  constructor() { }

  ngOnInit() {
  }

}
