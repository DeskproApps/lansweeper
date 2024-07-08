import { setAccessTokenService } from "../deskpro";
import { placeholders } from "../../constants";
import { baseRequest } from "./baseRequest";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { RefreshToken } from "./types";

const refreshAccessTokenService = (client: IDeskproClient) => {
  return baseRequest<RefreshToken>(client, {
    url: "/integrations/oauth/token",
    data: [
      "grant_type=refresh_token",
      `client_id=${placeholders.CLIENT_ID}`,
      `client_secret=${placeholders.CLIENT_SECRET}`,
      `refresh_token=${placeholders.GLOBAL_REFRESH_TOKEN}`,
    ].join("&"),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(({ access_token }) => setAccessTokenService(client, access_token ));
};

export { refreshAccessTokenService };
