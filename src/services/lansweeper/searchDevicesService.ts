import { baseRequest } from "./baseRequest";
import { gql } from "../../utils";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { GQL } from "./types";

type Params = {
  q: string;
  siteId: any;
};

const searchDevicesService = (
  client: IDeskproClient,
  { siteId, q}: Params,
) => {
  const query = gql({ id: siteId, q })`
    query getSite($id: ID!, $q: String!) {
      site(id: $id) {
        companyName
        assetResources(
            fields: [
                "assetBasicInfo.name",
                "assetBasicInfo.userDomain",
                "assetBasicInfo.description"
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

  return baseRequest<GQL<any>>(client, { data: query });
};

export { searchDevicesService };
