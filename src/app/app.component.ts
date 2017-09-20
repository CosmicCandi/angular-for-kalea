import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  selectedThing: object;

  favoriteThings = [
    {id:1, name:"walks on the beach"},
    {id:2, name:"long walks on the beach"},
    {id:3, name:"short walks on the beach"},
    {id:4, name:"naked walks on the beach"},
  ]

  clickedTheThing(thing){
    this.selectedThing = thing;
  }

}
