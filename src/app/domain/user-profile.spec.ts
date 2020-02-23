import { UserProfile } from './user-profile';

describe('UserProfile', () => {
  it('should create an instance', () => {
    expect(
      new UserProfile({
        name: { first: 'Foo', last: 'Bar' },
        email: 'test'
      })
    ).toBeTruthy();
  });

  it('should have original properties', () => {
    const u = new UserProfile({
      name: { first: 'Foo', last: 'Bar' },
      email: 'test'
    });
    expect(u.name.first).toBe('Foo');
    expect(u.name.last).toBe('Bar');
    expect(u.email).toBe('test');
  });

  it('should have extended properties', () => {
    const u = new UserProfile({
      name: { first: 'Foo', last: 'Bar' },
      email: 'test'
    });
    expect(u.fullName).toBe('Foo Bar');
  });
});
