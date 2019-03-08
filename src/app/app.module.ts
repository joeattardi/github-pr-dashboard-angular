import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PullRequestComponent } from './pull-request.component';
import { PullRequestListComponent } from './pull-request-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PullRequestComponent,
    PullRequestListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }