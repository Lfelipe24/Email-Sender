export type formValues = {
  email?: string;
  password?: string;
};

export type SignInApiResponse = {
  message: string;
  id_token: string;
  access_token: string;
  refresh_token: string;
};
