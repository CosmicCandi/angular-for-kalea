import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editthing',
  templateUrl: './editthing.component.html',
  styleUrls: ['./editthing.component.css']
})
export class EditthingComponent implements OnInit {

  @Input() selectedThing: object;

  fuckingProperty = "aslkjfsdflkj"

  constructor() { }

  ngOnInit() {
  }

}
