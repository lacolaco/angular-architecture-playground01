import { UserRepository } from './user.repository';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserRepository', () => {
  let repository: UserRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserRepository]
    });

    repository = TestBed.inject(UserRepository);
  });

  it('should create an instance', () => {
    expect(repository).toBeTruthy();
  });
});
