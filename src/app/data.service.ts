import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getPullRequests() {
    this.loading$.next(true);
    return this.http.get('/api/pulls').pipe(tap(() => this.loading$.next(false)));
  }
}
