import { Component, Input } from '@angular/core';

import { PullRequest } from '../../../types';

@Component({
  selector: 'app-pull-request-participants',
  templateUrl: './pull-request-participants.component.html',
  styleUrls: ['./pull-request-participants.component.scss']
})
export class PullRequestParticipantsComponent {
  @Input() pullRequest: PullRequest;

  get showOverflow(): boolean {
    return this.pullRequest.participants.totalCount > this.pullRequest.participants.nodes.length;
  }

  get overflowCount(): number {
    return this.pullRequest.participants.totalCount - 4;
  }

  get overflowTitle(): string {
    return this.overflowCount === 1 ? '1 more participant' : `${this.overflowCount} more participants`;
  }
}
