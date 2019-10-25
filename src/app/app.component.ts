import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote = [
    {id:1,name:'Life is too short to spend it alone'},
    {id:2,name:'Life is short,so am I'},
    {id:3,name:'Destroy what destroys you'},
    {id:4,name:'Mistakes are proof that you are trying'},
    {id:5,name:'Choose people who choose you'},
    {id:6,name:'Be a voice,not an echo'},
  ];
 
}
