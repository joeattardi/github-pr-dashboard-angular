import { Component, Input } from '@angular/core';

import dayjs from 'dayjs';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import { PullRequest } from '../../../../types';

@Component({
  selector: 'pr-updated-at',
  templateUrl: './updated-at.component.html',
  styleUrls: ['./updated-at.component.scss']
})
export class UpdatedAtComponent {
  @Input() pullRequest: PullRequest;

  faClock = faClock;

  get timeSinceUpdated(): string {
    return dayjs(this.pullRequest.updatedAt).fromNow();
  }
}
