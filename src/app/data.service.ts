import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PullRequest } from './types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: PullRequest[] = [
    {
      owner: 'angular',
      repository: 'angular',
      number: 1,
      title: 'My first pull request',
      created: new Date(2018, 11, 12, 14, 38),
      updated: new Date(2019, 2, 7, 11, 40)
    }
  ];

  constructor(private http: HttpClient) {}

  getPullRequests() {
    return this.http.get('/api/pulls');
  }
}
