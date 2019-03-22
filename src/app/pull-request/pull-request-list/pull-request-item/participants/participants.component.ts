import { Component, Input } from '@angular/core';

import { PullRequest } from '../../../../types';

@Component({
  selector: 'pr-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {
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
