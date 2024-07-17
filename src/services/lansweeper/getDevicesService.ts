import { baseRequest } from "./baseRequest";
import { gql } from "../../utils";
import { fields } from "../../constants";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { GQL, Device, DevicesResponse } from "./types";

const getDevicesService = (
  client: IDeskproClient,
  deviceKeys: Array<Device["key"]>,
) => {
  const query = gql({})`
    query getDevices {
      authorizedSites {
        sites {
          id
          name
          brandingName
          assetResources(
            fields: [${fields.DEVICE.join(",")}],
            filters: {
              conjunction: OR
              conditions: [
                ${deviceKeys.map((key) => `{ operator: EQUAL, path: "key", value: "${key}" }`).join(',')}
              ]
            }
          ) {
            total
            items
          }
        }
      }
    }
  `;

  return baseRequest<GQL<DevicesResponse>>(client, { data: query });
};

export { getDevicesService };
