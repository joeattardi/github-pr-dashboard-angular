import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DataService } from '../data.service';

@Component({
  selector: 'app-pull-request-list',
  templateUrl: './pull-request-list.component.html',
  styleUrls: ['./pull-request-list.component.scss']
})
export class PullRequestListComponent implements OnDestroy, OnInit {
  loading = true;

  pullRequests$: Observable<any>;

  private destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.pullRequests$ = this.dataService.getPullRequests();

    this.pullRequests$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => (this.loading = false));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
