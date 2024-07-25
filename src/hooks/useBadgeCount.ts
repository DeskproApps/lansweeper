import { useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import type { Maybe, DeviceType } from "../types";

const useBadgeCount = (count: number) => {
  useInitialisedDeskproAppClient((client) => {
    client.setBadgeCount(count);
  }, [count]);
};

export { useBadgeCount };
