import type { Maybe, Settings } from "@/types";

type Tokens = {
  access_token: string;
  refresh_token: string;
};

const parseGlobalAccessToken = (tokens?: Settings["global_access_token"]): Tokens => {
  const parsedTokens: Tokens = { access_token: "", refresh_token: "" };

  if (!tokens) {
    return parsedTokens;
  }

  try {
    const parsed = JSON.parse(tokens) as Maybe<Tokens>;
    parsedTokens.access_token = parsed?.access_token || "";
    parsedTokens.refresh_token = parsed?.refresh_token || "";
  } catch (e) {
    // the error is handled in the calling code
  }

  return parsedTokens;
};

export { parseGlobalAccessToken };
