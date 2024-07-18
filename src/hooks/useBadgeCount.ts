import { size } from "lodash";
import { useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import type { DeviceType } from "@/types";

const useBadgeCount = (items: DeviceType[]) => {
  useInitialisedDeskproAppClient((client) => {
    if (!Array.isArray(items)) {
      return;
    }

    client.setBadgeCount(size(items));
  }, [items]);
};

export { useBadgeCount };
