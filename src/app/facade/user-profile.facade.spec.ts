import { TestBed } from '@angular/core/testing';

import { UserProfileFacade } from './user-profile.facade';
import { GetUserProfileUsecase } from '../usecase/get-user-profile-usecase';
import { UserProfileStore } from '../store/user-profile-store';

describe('UserProfileFacade', () => {
  let service: UserProfileFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserProfileFacade,
        UserProfileStore,
        {
          provide: GetUserProfileUsecase,
          useValue: {}
        }
      ]
    });
    service = TestBed.inject(UserProfileFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
