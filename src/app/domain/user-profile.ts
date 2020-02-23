export interface UserProfileStruct {
  readonly name: {
    first: string;
    last: string;
  };
  readonly email: string;
}

export class UserProfile implements UserProfileStruct {
  constructor(readonly values: UserProfileStruct) {}

  get name() {
    return this.values.name;
  }
  get email() {
    return this.values.email;
  }

  get fullName(): string {
    return `${this.name.first} ${this.name.last}`;
  }
}
