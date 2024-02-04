import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input()
  name!: String;

  @Input()
  obj!: { name: String; age: number; country: String; language: Array<String>; };

  @Output() dataEvent = new EventEmitter<String>()
  addName(value:String){
    this.dataEvent.emit(value);
  }
}
