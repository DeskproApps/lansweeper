/** Common */
export const INPUT_DEBOUNCE = 500;

/** Typo */
export const nbsp = "\u00A0";

/** Date */
export const DATE_FORMAT = "dd MMM, yyyy";

export const TIME_FORMAT = "H:mm";

/** Deskpro */
export const APP_PREFIX = "lansweeper";

export const ENTITY = "linkedLansweeperDevice";

export const DEFAULT_ERROR = "There was an error!";

export const ACCESS_TOKEN_PATH = "oauth2/access_token";

export const placeholders = {
  CLIENT_ID: "__client_id__",
  CLIENT_SECRET: "__client_secret__",
  ACCESS_TOKEN: `[[${ACCESS_TOKEN_PATH}]]`,
  GLOBAL_ACCESS_TOKEN: `__global_access_token.json("[access_token]")__`,
  GLOBAL_REFRESH_TOKEN: `__global_access_token.json("[refresh_token]")__`,
};

/** Lansweeper */
export const APP_URL = "https://app.lansweeper.com";

export const BASE_URL = "https://api.lansweeper.com/api";

export const GRAPHQL_URL = `${BASE_URL}/v2/graphql`;
