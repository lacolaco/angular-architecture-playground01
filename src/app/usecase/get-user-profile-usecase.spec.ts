import { TestBed } from '@angular/core/testing';
import { UserRepository } from '../repository/user.repository';
import { GetUserProfileUsecase } from './get-user-profile-usecase';

describe('GetUserProfileUsecase', () => {
  let usecase: GetUserProfileUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetUserProfileUsecase,
        {
          provide: UserRepository,
          useValue: {}
        }
      ]
    });
    usecase = TestBed.inject(GetUserProfileUsecase);
  });

  it('should create an instance', () => {
    expect(usecase).toBeTruthy();
  });
});
