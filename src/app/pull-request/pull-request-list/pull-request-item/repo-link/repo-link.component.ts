import { Component, Input } from '@angular/core';

import { faBook } from '@fortawesome/free-solid-svg-icons';

import { PullRequest } from '../../../../types';

@Component({
  selector: 'pr-repo-link',
  templateUrl: './repo-link.component.html',
  styleUrls: ['./repo-link.component.scss']
})
export class RepoLinkComponent {
  @Input() pullRequest: PullRequest;

  faBook = faBook;
}
