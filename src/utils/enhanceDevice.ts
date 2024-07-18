import { get, map, omit, concat, assign, reduce, isEmpty } from "lodash";
import type { DeviceType } from "@/types";
import type { Site, Device, DevicesResponse, SearchResponce } from "@/services/lansweeper/types";

const enhance = (devices: Device[], site: Site) => {
  return map(devices, (d) => assign({}, d, { site }));
};

const enhanceSearchDevices = (site?: Site, data?: SearchResponce): DeviceType[] => {
  if (isEmpty(site) || isEmpty(data)) {
    return [];
  }

  return map(get(data, ["site", "assetResources", "items"]), (d: Device) => {
    return assign({}, d, { site }) as DeviceType;
  });
};

const enhanceDevices = (data?: DevicesResponse): DeviceType[] => {
  const sites = get(data, ["authorizedSites", "sites"]);

  if (!sites) {
    return [];
  }

  return reduce(sites, (acc: DeviceType[], s) => {
    const site = omit(s, ["assetResources"]);
    const devices = enhance(get(s, ["assetResources", "items"], []), site);

    return concat(acc, devices);
  }, []);
};

export { enhanceSearchDevices, enhanceDevices };
