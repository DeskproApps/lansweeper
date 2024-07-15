import { baseRequest } from "./baseRequest";
import { gql } from "../../utils";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { GQL, Site, SearchResponce } from "./types";

type Params = {
  q: string;
  siteId: Site["id"];
};

const searchDevicesService = (
  client: IDeskproClient,
  { siteId, q }: Params,
) => {
  const query = gql({ id: siteId, q })`
    query getSite($id: ID!, $q: String!) {
      site(id: $id) {
        assetResources(
            fields: [
              "key",
              "assetBasicInfo.name",
              "assetBasicInfo.ipAddress",
              "assetBasicInfo.mac",
              "assetBasicInfo.subType",
              "assetBasicInfo.type",
              "assetCustom.manufacturer",
              "assetCustom.model",
              "assetCustom.serialNumber",
              "diskPartitions.mountedOn",
              "diskPartitions.available",
              "diskPartitions.size",
              "operatingSystem.caption",
              "operatingSystem.name",
              "operatingSystem.version",
            ],
            filters: {
                conjunction: OR
                conditions: [
                    { operator: LIKE, path: "assetBasicInfo.name", value: $q },
                    { operator: LIKE, path: "assetBasicInfo.ipAddress", value: $q },
                    { operator: LIKE, path: "assetBasicInfo.mac", value: $q }
                ]
            }
        ) {
            total
            items
        }
      }
    }
  `;

  return baseRequest<GQL<SearchResponce>>(client, { data: query });
};

export { searchDevicesService };
