import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { PullRequestListComponent } from './pull-request-list/pull-request-list.component';
import { PullRequestItemComponent } from './pull-request-list/pull-request-item/pull-request-item.component';
import { PullRequestParticipantsComponent } from './pull-request-list/pull-request-item/pull-request-participants/pull-request-participants.component';


@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    PullRequestItemComponent,
    PullRequestParticipantsComponent,
    PullRequestListComponent
  ],
  exports: [
    PullRequestListComponent
  ]
})
export class PullRequestModule {}
