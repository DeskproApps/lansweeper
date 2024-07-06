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
  scope: string;
};

export type RefreshToken = {
  token_type: "Bearer",
  access_token: string;
  expires_in: number;
  scope: string;
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

export type Device = {
  assetBasicInfo: {
    name: string;
  };
  key: string;
};
