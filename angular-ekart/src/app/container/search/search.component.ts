import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  // updateSearchText(event: any){
  //   this.searchText = event.target.value;
  // }

  // updateSearchText(searchInput: HTMLInputElement){
  //   this.searchText = searchInput.value;
  //   //raise the event for filter
  //   this.searchTextChanged.emit(this.searchText);
  // }

  //@ViewChild takes 2 argument => selectors(stringValue, component, directives) and 2nd is optional
  //Optional takes 2 arguments => read and static
  //1.read: Use it to read the different token from the queried elements.
  // 2. static: Determines when the query is resolved
  // True is when the view is initialized (before the first change detection) for the first time.
  // false if you want it to be resolved after every change detection


  @ViewChild('searchInput') searchInputEl: ElementRef;

  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    //raise the event for filter
    this.searchTextChanged.emit(this.searchText);
  }

  //1. create the event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //2.raise the event
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }
}
