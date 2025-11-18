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

export const INTEGRATION_ID = "2c9a9343-46f8-49de-a8d4-f9c76863f5bf";

export const placeholders = {
  CLIENT_ID: "__client_id__",
  CLIENT_SECRET: "__client_secret__",
  ACCESS_TOKEN: `[[${ACCESS_TOKEN_PATH}]]`,
  GLOBAL_ACCESS_TOKEN: `__global_access_token.json("[access_token]")__`,
  GLOBAL_REFRESH_TOKEN: `__global_access_token.json("[refresh_token]").urlencode__`,
} as const;

/** Lansweeper */
export const APP_URL = "https://app.lansweeper.com";

export const BASE_URL = "https://api.lansweeper.com/api";

export const GRAPHQL_URL = `${BASE_URL}/v2/graphql`;

export const fields = {
  DEVICE: [
    `"key"`,
    `"assetBasicInfo.name"`,
    `"assetBasicInfo.ipAddress"`,
    `"assetBasicInfo.mac"`,
    `"assetBasicInfo.subType"`,
    `"assetBasicInfo.type"`,
    `"assetCustom.manufacturer"`,
    `"assetCustom.model"`,
    `"assetCustom.serialNumber"`,
    `"diskPartitions.mountedOn"`,
    `"diskPartitions.available"`,
    `"diskPartitions.size"`,
    `"operatingSystem.caption"`,
    `"operatingSystem.name"`,
    `"operatingSystem.version"`,
  ],
} as const;
