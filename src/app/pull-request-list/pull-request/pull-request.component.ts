import { Component, Input } from '@angular/core';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { PullRequest } from '../../types';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.scss']
})
export class PullRequestComponent {
  faExternalLinkAlt = faExternalLinkAlt;

  @Input() pullRequest: PullRequest;
}
