import type { Settings } from "../types";

type ParseGlobalAccessToken = (tokens?: Settings["global_access_token"]) => {
  access_token: string;
  refresh_token: string;
};

const parseGlobalAccessToken: ParseGlobalAccessToken = (tokens) => {
  const parsedTokens = { access_token: "", refresh_token: "" };

  if (!tokens) {
    return parsedTokens;
  }

  try {
    const parsed = JSON.parse(tokens) as {access_token: string, refresh_token: string}|undefined;
    parsedTokens.access_token = parsed?.access_token || "";
    parsedTokens.refresh_token = parsed?.refresh_token || "";
  } catch (e) {
    // the error is handled in the calling code
  }

  return parsedTokens;
};

export { parseGlobalAccessToken };
