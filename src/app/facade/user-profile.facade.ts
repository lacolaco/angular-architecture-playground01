import { Injectable } from '@angular/core';
import { Facade } from '../../lib/usecase-facade';
import { UserProfile } from '../domain/user-profile';
import { UserProfileStore } from '../store/user-profile-store';
import { GetUserProfileUsecase } from '../usecase/get-user-profile-usecase';

export interface QueryState {
  userProfile: UserProfile | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileFacade extends Facade<QueryState> {
  constructor(
    private getUserProfileUsecase: GetUserProfileUsecase,
    private userProfileStore: UserProfileStore
  ) {
    super();
  }

  configureStateQuery() {
    return {
      userProfile: this.userProfileStore.select(state => state.userProfile)
    };
  }

  async fetchUserProfile() {
    this.getUserProfileUsecase.execute();
  }
}
