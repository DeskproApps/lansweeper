import type { To, ParamKeyValuePair } from "react-router-dom";
import type { DropdownValueType } from "@deskpro/deskpro-ui";
import type { Context, IDeskproClient } from "@deskpro/app-sdk";
import type { Response, Device, Site } from "@/services/lansweeper/types";

/** Common types */
export type Maybe<T> = T | undefined | null;

export type Dict<T> = Record<string, T>;

export type Option<Value = unknown> = Omit<DropdownValueType<Value>, "subItems">;

/** An ISO-8601 encoded UTC date time string. Example value: `""2019-09-07T15:50:00Z"` */
export type DateTime = string;

/** Request types */
export type ApiRequestMethod = "GET" | "POST";

export type RequestParams = {
  url?: string;
  method?: ApiRequestMethod;
  data?: Dict<string>|RequestInit["body"];
  headers?: Dict<string>;
  queryParams?: string|Dict<string>|ParamKeyValuePair[];
  settings?: Settings;
};

export type Request = <T>(
  client: IDeskproClient,
  params: RequestParams,
) => Response<T>;

/** Deskpro types */
export type Settings = {
  client_id?: string;
  client_secret?: string;
  global_access_token?: string; // JSON which looks like this format: {"access_token":"...","refresh_token":"..."}
};

export type DPUser = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  titlePrefix: string;
  isDisabled: boolean;
  isAgent: boolean;
  isConfirmed: boolean;
  emails: string[];
  primaryEmail: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  customFields: Dict<any>;
  language: string;
  locale: string;
};

export type UserData = {
  user: DPUser;
};

export type UserContext = Context<UserData, Maybe<Settings>>;

export type NavigateToChangePage = { type: "changePage", path: To };

export type UnlinkPayload = { type: "unlink", device: DeviceType };

export type EventPayload =
  | NavigateToChangePage
  | UnlinkPayload
;

export type DeviceType = Device & {
  site?: Site;
};
