import { Store } from '@lacolaco/reactive-store';
import { UserProfile } from '../domain/user-profile';
import { Injectable } from '@angular/core';

export interface State {
  userProfile: UserProfile | null;
}

@Injectable({ providedIn: 'root' })
export class UserProfileStore extends Store<State> {
  constructor() {
    super({
      initialValue: {
        userProfile: null
      }
    });
  }
}
