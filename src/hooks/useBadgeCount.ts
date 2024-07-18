import { useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import type { Maybe, DeviceType } from "../types";

const useBadgeCount = (items: Maybe<DeviceType[]>) => {
  useInitialisedDeskproAppClient((client) => {
    client.setBadgeCount(items?.length ?? 0);
  }, [items]);
};

export { useBadgeCount };
