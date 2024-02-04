import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //get the first template matching
  @ContentChild('para') paragraphEl: ElementRef;

  //get all the matches
  @ContentChildren('para') paragraphsEl: QueryList<ElementRef>;

  //get the component matching by using component
  @ContentChild(TestComponent) testEl: TestComponent;

  //get all the matches
  @ContentChildren(TestComponent) testEls: QueryList<TestComponent>

  styleParagraph() {
    console.log(this.paragraphEl.nativeElement);
    console.log(this.paragraphsEl.forEach((e) => console.log(e.nativeElement)))
    console.log(this.testEl.name);
    console.log(this.testEls.forEach((e) => console.log(e.name)))
  }

}
