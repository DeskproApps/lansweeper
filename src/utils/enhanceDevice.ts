import { omit, concat, assign, isEmpty } from "lodash-es";
import type { Maybe, DeviceType } from "../types";
import type { Site, Device, DevicesResponse, SearchResponce } from "../services/lansweeper/types";

const enhance = (devices: Device[], site: Site) => {
  return devices.map((d) => assign({}, d, { site }));
};

const enhanceSearchDevices = (data: Maybe<SearchResponce>, site: Maybe<Site>): DeviceType[] => {
  const items = data?.site?.assetResources?.items;
  if (isEmpty(site) || isEmpty(data) || !Array.isArray(items)) {
    return [];
  }

  return items.map((d: Device) => {
    return assign({}, d, { site }) as DeviceType;
  });
};

const enhanceDevices = (data: Maybe<DevicesResponse>): DeviceType[] => {
  const sites = data?.authorizedSites?.sites;

  if (!Array.isArray(sites)) {
    return [];
  }

  return sites.reduce((acc: DeviceType[], s) => {
    const site = omit(s, ["assetResources"]);
    const devices = enhance(s?.assetResources?.items ?? [], site);

    return concat(acc, devices);
  }, []);
};

export { enhanceSearchDevices, enhanceDevices };
