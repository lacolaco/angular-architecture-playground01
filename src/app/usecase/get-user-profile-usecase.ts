import { Injectable } from '@angular/core';
import { UserRepository } from '../repository/user.repository';
import { UserProfileStore } from '../store/user-profile-store';

@Injectable({ providedIn: 'root' })
export class GetUserProfileUsecase {
  constructor(
    private store: UserProfileStore,
    private userRepository: UserRepository
  ) {}
  async execute() {
    const userProfile = await this.userRepository.getProfile().toPromise();
    this.store.update(state => ({ ...state, userProfile }));
  }
}
