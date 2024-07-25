import { useMemo } from "react";
import { reduce, concat } from "lodash-es";
import { useQueryWithClient } from "@deskpro/app-sdk";
import { getSitesService, searchDevicesService } from "@/services/lansweeper";
import { enhanceSearchDevices } from "@/utils";
import { QueryKey } from "@/query";
import type { Maybe, DeviceType } from "@/types";
import type { Site, Profile } from "@/services/lansweeper/types";

type UseSearchDevices = (siteId?: Maybe<Site["id"]>, q?: Maybe<string>) => {
  isLoading: boolean;
  devices: DeviceType[];
  sites: Site[];
  isFetching: boolean;
};

const getSites = (profiles?: Profile[]) => {
  return reduce(profiles, (acc: Site[], profile: Profile) => {
    return concat(acc, profile.site);
  }, []);
};

const useSearchDevices: UseSearchDevices = (siteId, q) => {
  const sitesResponce = useQueryWithClient([QueryKey.SITES], getSitesService);

  const sites = useMemo(() => {
    return getSites(sitesResponce.data?.data?.me?.profiles);
  }, [sitesResponce.data]);

  const devicesResponce = useQueryWithClient(
    [QueryKey.DEVICES, siteId as Site["id"], q as string],
    (client) => searchDevicesService(client, { siteId: siteId as Site["id"], q: q as string }),
    { enabled: Boolean(q) && Boolean(siteId) },
  );

  const devices: DeviceType[] = useMemo(() => {
    return enhanceSearchDevices(devicesResponce.data?.data, sites.find(({ id }) => id === siteId) as Site);
  }, [siteId, devicesResponce.data, sites]);

  return {
    isLoading: [sitesResponce].some(({ isLoading }) => isLoading),
    isFetching: Boolean(q) && Boolean(siteId) && devicesResponce.isLoading,
    sites,
    devices,
  };
};

export { useSearchDevices };
