import { Component, Input } from '@angular/core';

import dayjs from 'dayjs';

import { PullRequest } from '../../../../types';

@Component({
  selector: 'pr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() pullRequest: PullRequest;

  get timeSinceCreated(): string {
    return dayjs(this.pullRequest.createdAt).fromNow();
  }
}
