import { Component, Input } from '@angular/core';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { faBook, faClock, faCodeBranch, faComment, faExternalLinkAlt, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import { PullRequest } from '../../types';

dayjs.extend(relativeTime);

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.scss']
})
export class PullRequestComponent {
  faExternalLinkAlt = faExternalLinkAlt;
  faCodeBranch = faCodeBranch;
  faBook = faBook;
  faComment = faComment;
  faClock = faClock;
  faLongArrowAltRight = faLongArrowAltRight;

  @Input() pullRequest: PullRequest;

  get timeSinceCreated(): string {
    return dayjs(this.pullRequest.createdAt).fromNow();
  }

  get timeSinceUpdated(): string {
    return dayjs(this.pullRequest.updatedAt).fromNow();
  }

  get commentsTitle(): string {
    const count = this.pullRequest.comments.totalCount;
    return count === 1 ? '1 comment' : `${count} comments`;
  }
}
