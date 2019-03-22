import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-pull-request-list',
  templateUrl: './pull-request-list.component.html',
  styleUrls: ['./pull-request-list.component.scss']
})
export class PullRequestListComponent implements OnDestroy, OnInit {
  loading$: Observable<boolean>;

  pullRequests$: Observable<any>;

  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loading$ = this.dataService.getLoading();
    this.pullRequests$ = this.dataService.getPullRequests();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
