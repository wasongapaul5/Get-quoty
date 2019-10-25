import { Component, OnInit } from '@angular/core';
import { Quote }from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote [] = [
new Quote(1,'Life is too short to spend it alone','Paul Oketch Wasonga'),
new Quote(2,'Life is short,so am I','As much as life seems to be either hard or simple,you should take it as it is'),
new Quote(3,'Destroy what destroys you','If something does not add a value to your life you should go against it'),
new Quote(4,'Mistakes are proof that you are trying','Mistakes are a way to learning new things and it is right to make mistake'),
new Quote(5,'Choose people who choose you','Be with the people who are willing to travel with you through the same journey of life'),
new Quote(6,'Be a voice,not an echo','Always be someone who uses his/her words to say something useful'),
];

toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}






