import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PullRequest } from './types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPullRequests() {
    return this.http.get('/api/pulls');
  }
}
