import { useInitialisedDeskproAppClient } from "@deskpro/app-sdk";

const useBadgeCount = (count: number) => {
  useInitialisedDeskproAppClient((client) => {
    client.setBadgeCount(count);
  }, [count]);
};

export { useBadgeCount };
