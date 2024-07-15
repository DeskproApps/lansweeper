import { useMemo } from "react";
import { get, reduce, concat } from "lodash";
import { useQueryWithClient } from "@deskpro/app-sdk";
import { getSitesService, searchDevicesService } from "../../services/lansweeper";
import { QueryKey } from "../../query";
import type { Maybe } from "../../types";
import type { Site, Profile, Device } from "../../services/lansweeper/types";

type UseSearchDevices = (siteId?: Maybe<Site["id"]>, q?: Maybe<string>) => {
  isLoading: boolean;
  devices: Device[];
  sites: Site[];
  isFetching: boolean;
};

const getSites = (profiles?: Profile[]) => {
  return reduce(profiles, (acc: Site[], profile: Profile) => {
    return concat(acc, profile.site);
  }, []);
};

const useSearchDevices: UseSearchDevices = (siteId, q) => {
  const sites = useQueryWithClient([QueryKey.SITES], getSitesService);

  const devices = useQueryWithClient(
    [QueryKey.DEVICES, siteId as Site["id"], q as string],
    (client) => searchDevicesService(client, { siteId: siteId as Site["id"], q: q as string }),
    { enabled: Boolean(q) && Boolean(siteId) },
  );

  return {
    isLoading: [sites].some(({ isLoading }) => isLoading),
    isFetching: Boolean(q) && Boolean(siteId) && devices.isLoading,
    sites: useMemo(() => getSites(get(sites.data, ["data", "me", "profiles"])), [sites.data]),
    devices: useMemo(() => {
      return get(devices.data, ["data", "site", "assetResources", "items"], []);
    }, [devices.data]),
  };
};

export { useSearchDevices };
