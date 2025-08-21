import { isEmpty } from "lodash-es";
import { proxyFetch, adminGenericProxyFetch } from "@deskpro/app-sdk";
import { GRAPHQL_URL, placeholders, INTEGRATION_ID } from "@/constants";
import { getQueryParams, getRequestBody, parseGlobalAccessToken } from "@/utils";
import { LansweeperError } from "./LansweeperError";
import manifest from "@/../manifest.json";
import type { Request } from "@/types";

const baseRequest: Request = async (client, {
  url,
  data,
  method = "POST",
  queryParams = {},
  headers: customHeaders,
  settings,
}) => {
  const isAdmin = Boolean(settings);
  const dpFetch = await (isAdmin ? adminGenericProxyFetch : proxyFetch)(client);
  const baseUrl = url ?? GRAPHQL_URL;
  const params = getQueryParams(queryParams);
  const body = getRequestBody(data);
  const tokens = parseGlobalAccessToken(settings?.global_access_token);
  const appVersion = manifest.version;

  const requestUrl = `${baseUrl}${isEmpty(params) ? "": `?${params}`}`;
  const options: RequestInit = {
    method,
    body,
    headers: {
      "Authorization": `Bearer ${isAdmin ? tokens.access_token : placeholders.GLOBAL_ACCESS_TOKEN}`,
      "Accept": "application/json",
      "x-ls-integration-id": INTEGRATION_ID,
      "x-ls-integration-version": appVersion,
      ...customHeaders,
    },
  };

  if (!isEmpty(data)) {
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }

  const res = await dpFetch(requestUrl, options);

  if (res.status < 200 || res.status > 399) {
    let errorData;

    try {
      errorData = await res.json();
    } catch (e) {
      errorData = {};
    }

    throw new LansweeperError({
      status: res.status,
      data: errorData,
    });
  }

  let result;

  try {
    result = await res.json();
  } catch (e) {
    return {};
  }

  return result;
};

export { baseRequest };
