import { baseRequest } from "./baseRequest";
import { gql } from "@/utils";
import { fields } from "@/constants";
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
  const query = gql({ siteId, q })`
    query getSite($siteId: ID!, $q: String!) {
      site(id: $siteId) {
        assetResources(
          fields: [${fields.DEVICE.join(",")}],
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
