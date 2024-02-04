import { QueryList, ViewChildren } from '@angular/core';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-view-children';

  fullName:string = '';
  @ViewChildren('input')
  inputElements: QueryList<ElementRef>;

  show(){
    let fName:string = '';
    this.inputElements.forEach((el) => {
      fName = `${fName} ${el.nativeElement.value}`;
    })
    this.fullName = fName;
  }
}
