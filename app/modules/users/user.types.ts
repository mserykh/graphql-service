export interface NewUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
