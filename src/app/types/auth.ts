export type LoginType = {
  email: string;
  password: string;
};

export type AuthResponseType = {
  accessToken: string;
};

export type SignUpType = {
  email: string;
  password: string;
  confirmPassword: string;
};
