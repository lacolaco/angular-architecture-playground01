export interface UserResponse {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    email: string;
  }>;
}
