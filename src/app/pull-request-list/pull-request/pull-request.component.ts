import { Component, Input } from '@angular/core';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { PullRequest } from '../../types';

dayjs.extend(relativeTime);

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.scss']
})
export class PullRequestComponent {
  faExternalLinkAlt = faExternalLinkAlt;

  @Input() pullRequest: PullRequest;

  get timeSinceCreated(): string {
    return dayjs(this.pullRequest.createdAt).fromNow();
  }
}
