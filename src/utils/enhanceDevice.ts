import { omit, concat, assign, reduce, isEmpty } from "lodash-es";
import type { DeviceType } from "../types";
import type { Site, Device, DevicesResponse, SearchResponce } from "../services/lansweeper/types";

const enhance = (devices: Device[], site: Site) => {
  return devices.map((d) => assign({}, d, { site }));
};

const enhanceSearchDevices = (site?: Site, data?: SearchResponce): DeviceType[] => {
  const items = data?.site?.assetResources?.items;
  if (isEmpty(site) || isEmpty(data) || !Array.isArray(items)) {
    return [];
  }

  return items.map((d: Device) => {
    return assign({}, d, { site }) as DeviceType;
  });
};

const enhanceDevices = (data?: DevicesResponse): DeviceType[] => {
  const sites = data?.authorizedSites?.sites ?? [];

  if (!sites) {
    return [];
  }

  return reduce(sites, (acc: DeviceType[], s) => {
    const site = omit(s, ["assetResources"]);
    const devices = enhance(s?.assetResources?.items ?? [], site);

    return concat(acc, devices);
  }, []);
};

export { enhanceSearchDevices, enhanceDevices };
