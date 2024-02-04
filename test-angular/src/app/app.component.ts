import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'data-share-between-parent-and-child';
  currentName = 'Sudhakar';

  names:Array<String> = ['Ragavan','Viswa'];
  addName(name:String){
    this.names.push(name);
  }

  user = {
    name : 'Ragavan',
    age : 21,
    country : "India",
    language : ['Tamil','English']
  }

  listOfString: string[] = ['Ajay', 'Anand', 'Arul', 'Azeem'];

  searchText: string = '';

  updateSearchText(event: string){
    this.searchText = event;
  }
}
