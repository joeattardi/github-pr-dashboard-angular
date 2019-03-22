import { Component, Input } from '@angular/core';

import { faComment } from '@fortawesome/free-solid-svg-icons';

import { PullRequest } from '../../../../types';

@Component({
  selector: 'pr-comment-count',
  templateUrl: './comment-count.component.html',
  styleUrls: ['./comment-count.component.scss']
})
export class CommentCountComponent {
  faComment = faComment;

  @Input() pullRequest: PullRequest;

  get commentsTitle(): string {
    const count = this.pullRequest.comments.totalCount;
    return count === 1 ? '1 comment' : `${count} comments`;
  }
}
