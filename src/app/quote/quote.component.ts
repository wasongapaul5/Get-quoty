import { Component, OnInit } from '@angular/core';
import { Quote }from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {
quotes:Quote [] = [
new Quote(1,'Stop looking for happines where you lost it','Paul Tennison.', 'Paul Wasonga', 0,0,new Date(2017,3,14)),
new Quote(2,'There is no elevator to success,you must take the stairs','Fredrick Sundqvist','Paul Wasonga', 0,0,new Date (2019,3,12)),
new Quote(3,'Destroy what destroys you','Nina Eklund.','Paul Wasonga', 0,0,new Date(2016,4,17)), 
new Quote(4,'Mistakes are proof that you are trying','Petter Ericsson.','Paul Wasonga', 0,0,new Date(2018,1,21)),
new Quote(3,'Just because my path is different doest not mean I am lost','Glen Leibowitz.','Paul Wasonga', 0,0,new Date(2010,4,17)), 
new Quote(4,'Be the change you want to see in this world','Martin Luther.','Paul Wasonga', 0,0,new Date(2018,1,21)),
];

toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete,index){
  if(isComplete){
    this.quotes.splice(index,1);
  }
}

addNewQuotes(quotes){
  let quoteLength = this.quotes.length;
  quotes.id = quoteLength + 1;
  quotes.completeDate(quotes.completeDate)
  this.quotes.push(quotes)
}
  constructor() { }

  ngOnInit() {
  }

}






