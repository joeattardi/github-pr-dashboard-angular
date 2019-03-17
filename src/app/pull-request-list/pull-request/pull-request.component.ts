import { Component, Input } from '@angular/core';

import { PullRequest } from '../../types';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.scss']
})
export class PullRequestComponent {
  @Input() pullRequest: PullRequest;
}
