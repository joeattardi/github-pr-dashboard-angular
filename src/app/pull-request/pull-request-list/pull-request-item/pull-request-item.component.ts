import { Component, Input } from '@angular/core';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { PullRequest } from '../../../types';

dayjs.extend(relativeTime);

@Component({
  selector: 'app-pull-request-item',
  templateUrl: './pull-request-item.component.html',
  styleUrls: ['./pull-request-item.component.scss']
})
export class PullRequestItemComponent {
  @Input() pullRequest: PullRequest;
}
