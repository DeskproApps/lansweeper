import { useCallback } from "react";
import { APP_URL } from "@/constants";
import type { Maybe } from "@/types";
import type { Site, Device } from "@/services/lansweeper/types";

type GetDeviceLink = (siteName?: Site["name"], deviceKey?: Device["key"]) => Maybe<string>;

export type Result = {
  getDeviceLink: GetDeviceLink;
};

type UseExternalLinks = () => Result;

const useExternalLinks: UseExternalLinks = () => {
  const getDeviceLink: GetDeviceLink = useCallback((siteName, deviceKey) => {
    if (!siteName || !deviceKey) {
      return null;
    }

    return `${APP_URL}/${siteName}/asset/${deviceKey}`;
  }, []);

  return { getDeviceLink };
};

export { useExternalLinks };
