import { Component, Input } from '@angular/core';

import { faCodeBranch, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import { PullRequest } from '../../../../types';

@Component({
  selector: 'pr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCodeBranch = faCodeBranch;
  faLongArrowAltRight = faLongArrowAltRight;

  @Input() pullRequest: PullRequest;
}
