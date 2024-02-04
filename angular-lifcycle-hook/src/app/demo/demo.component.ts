import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges {

  title: string = 'Demo Component';

  @Input() message: string;
  constructor() {
    console.log('Demo component constructor called');
    console.log(this.title);
    console.log(this.message);
  }

  // it execute whenever the message is changed
  // output
  //Demo component constructor called
  // demo.component.ts:15 Demo Component
  // demo.component.ts:16 undefined
  // demo.component.ts:21 ngOnChanges Hook called
  // demo.component.ts:22
  // core.mjs:23480 Angular is running in development mode. Call enableProdMode() to enable production mode.
  // demo.component.ts:21 ngOnChanges Hook called
  // demo.component.ts:22 su
  // demo.component.ts:21 ngOnChanges Hook called
  // demo.component.ts:22 sujlkkjl
  // demo.component.ts:21 ngOnChanges Hook called
  // demo.component.ts:22 sujlkkjlas

  //log only the current value
  // ngOnChanges() {
  //   console.log("ngOnChanges Hook called");
  //   console.log(this.message);
  // }
  //{message: SimpleChange}
  // message
  //   :
  //   SimpleChange
  // currentValue
  //   :
  //   "dddddd"
  // firstChange
  //   :
  //   false
  // previousValue
  //   :
  //   ""
  // [[Prototype]]
  //   :
  //   Object
  // [[Prototype]]
  //   :
  //   Object
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Hook called and log the previous value and the current value");
    console.log(changes);
  }
}
