export type Response<T> = Promise<T>;

export type GQL<T> = { data: T };

export type LansweeperAPIError = {
  //..
};

export type AccessToken = {
  token_type: "Bearer";
  access_token: string;
  refresh_token: string;
  expires_in: number;
};

export type User = {
  me: {
    id: string;
    username: string;
    email: string;
    name: string;
    surname: string;
    fullName: string;
    imageUrl: string;
    language: string;
  };
};
