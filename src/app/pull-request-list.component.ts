import { Component } from '@angular/core';

import { DataService } from './data.service';
import { PullRequest } from './types';

@Component({
  selector: 'app-pull-request-list',
  templateUrl: './pull-request-list.component.html',
  styleUrls: ['./pull-request-list.component.scss']
})
export class PullRequestListComponent {
  constructor(private dataService: DataService) {}

  get data(): PullRequest[] {
    return this.dataService.data;
  }
}
