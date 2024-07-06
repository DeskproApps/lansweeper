import { useMemo } from "react";
import { get, reduce, concat } from "lodash";
import { useQueryWithClient } from "@deskpro/app-sdk";
import { getSitesService, searchDevicesService } from "../../services/lansweeper";
import { QueryKey } from "../../query";
import type { Maybe } from "../../types";

type UseSearchDevices = (siteId?: any, q?: string) => {
  isLoading: boolean;
  devices: any[];
  sites: any[];
  isFetching: boolean;
};

const getSites = (profiles: Maybe<any[]>) => {
  return reduce(profiles, (acc: any[], profile: any) => {
    return concat(acc, profile.site);
  }, []);
};

const useSearchDevices: UseSearchDevices = (siteId, q) => {
  const sites = useQueryWithClient([QueryKey.SITES], getSitesService);

  const devices = useQueryWithClient(
    [QueryKey.DEVICES, siteId, q as string],
    (client) => searchDevicesService(client, { siteId, q: q as string }),
    { enabled: Boolean(q) && Boolean(siteId) },
  );

  return {
    isLoading: [sites].some(({ isLoading }) => isLoading),
    isFetching: Boolean(q) && Boolean(siteId) && devices.isLoading,
    sites: useMemo(() => getSites(get(sites.data, ["data", "me", "profiles"])), [sites.data]),
    devices: useMemo(() => get(devices.data, ["data", "site", "assetResources", "items"]), [devices.data]),
  };
};

export { useSearchDevices };
