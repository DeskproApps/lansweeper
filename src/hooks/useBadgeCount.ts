import { useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import type { DeviceType } from "@/types";

const useBadgeCount = (items: DeviceType[]) => {
  useInitialisedDeskproAppClient((client) => {
    client.setBadgeCount(items?.length ?? 0);
  }, [items]);
};

export { useBadgeCount };
