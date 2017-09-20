import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editthing',
  templateUrl: './editthing.component.html',
  styleUrls: ['./editthing.component.css']
})
export class EditthingComponent implements OnInit {

  @Input() selectedThing: object;
  @Output() theThingHappenedEvent = new EventEmitter<string>()

  fuckingProperty = "aslkjfsdflkj"

  constructor() { }

  ngOnInit() {
  }

  clickedDaButton(){
    this.theThingHappenedEvent.emit("this came from the child");
  }

}
