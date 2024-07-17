import type {
  Me,
  AssetCustom,
  AssetBasicInfo,
  OperatingSystem,
  Site as SiteType,
  AssetDetailsResponse,
  DiskPartition as DiskPartitionType,
} from "./schema";

export type Response<T> = Promise<T>;

export type GQL<T> = { data: T };

export type LansweeperAPIError = {
  //..
};

export type AccessToken = {
  token_type: "Bearer";
  access_token: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
};

export type RefreshToken = {
  token_type: "Bearer",
  access_token: string;
  expires_in: number;
  scope: string;
};

export type CurrentUser = {
  me: Pick<Me, "id"|"username"|"email"|"name"|"surname"|"fullName"|"imageUrl"|"language">;
};

export type Site = Pick<SiteType, "id"|"name"|"brandingName">;

export type Profile = {
  site: Site;
};

export type SiteResponse = {
  me: {
    profiles: Profile[];
  };
};

export type DiskPartition = Pick<DiskPartitionType, "mountedOn"|"available"|"size">;

export type Device = {
  key: AssetDetailsResponse["key"];
  assetBasicInfo: Pick<AssetBasicInfo, "name"|"ipAddress"|"mac"|"subType"|"type">;
  assetCustom: Pick<AssetCustom, "model"|"serialNumber">;
  diskPartitions: DiskPartition[];
  operatingSystem: Pick<OperatingSystem, "caption"|"name"|"version">;
};

export type AssetResources = {
  items: Device[];
  total: number;
};

export type SearchResponce = {
  site: {
    assetResources: AssetResources;
  };
};

export type DevicesResponse = {
  authorizedSites: {
    sites: Array<Site & {
      assetResources: AssetResources;
    }>;
  };
};
