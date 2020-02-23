import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfile } from '../domain/user-profile';
import { UserResponse } from './types';

@Injectable({ providedIn: 'root' })
export class UserRepository {
  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<UserProfile> {
    return this.httpClient
      .get<UserResponse>('https://randomuser.me/api/')
      .pipe(map(resp => new UserProfile(resp.results[0])));
  }
}
