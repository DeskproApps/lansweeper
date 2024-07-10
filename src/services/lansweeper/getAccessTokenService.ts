import { getQueryParams } from "../../utils";
import { BASE_URL } from "../../constants";
import { baseRequest } from "./baseRequest";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { AccessToken } from "./types";

type Params = {
  code: string;
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
};

const getAccessTokenService = (
  client: IDeskproClient,
  { code, clientId, clientSecret, callbackUrl }: Params,
) => {
  const data = new FormData();
  data.append("grant_type", "authorization_code");
  data.append("code", code);
  data.append("client_id", clientId);
  data.append("client_secret", clientSecret);
  data.append("redirect_uri", callbackUrl);

  return baseRequest<AccessToken>(client, {
    url: `${BASE_URL}/integrations/oauth/token`,
    data: getQueryParams(data),
    settings: {},
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export { getAccessTokenService };
