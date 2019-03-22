import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CommentCountComponent } from './pull-request-list/pull-request-item/comment-count/comment-count.component';
import { FooterComponent } from './pull-request-list/pull-request-item/footer/footer.component';
import { HeaderComponent } from './pull-request-list/pull-request-item/header/header.component';
import { PullRequestListComponent } from './pull-request-list/pull-request-list.component';
import { PullRequestItemComponent } from './pull-request-list/pull-request-item/pull-request-item.component';
import { ParticipantsComponent } from './pull-request-list/pull-request-item/participants/participants.component';
import { RepoLinkComponent } from './pull-request-list/pull-request-item/repo-link/repo-link.component';
import { UpdatedAtComponent } from './pull-request-list/pull-request-item/updated-at/updated-at.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    CommentCountComponent,
    FooterComponent,
    HeaderComponent,
    ParticipantsComponent,
    PullRequestItemComponent,
    PullRequestListComponent,
    RepoLinkComponent,
    UpdatedAtComponent
  ],
  exports: [
    PullRequestListComponent
  ]
})
export class PullRequestModule {}
