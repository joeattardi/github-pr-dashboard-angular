import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PullRequestComponent } from './pull-request-list/pull-request/pull-request.component';
import { PullRequestListComponent } from './pull-request-list/pull-request-list.component';
import {
  PullRequestParticipantsComponent
} from './pull-request-list/pull-request/pull-request-participants/pull-request-participants.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PullRequestComponent,
    PullRequestListComponent,
    PullRequestParticipantsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
