import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ParentComponent } from './content-child/parent/parent.component';
import { ChildComponent } from './content-child/parent/child/child.component';
import { TestComponent } from './content-child/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateComponent,
    NgContainerComponent,
    ContentChildComponent,
    ParentComponent,
    ChildComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
