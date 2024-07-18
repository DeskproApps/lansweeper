import { baseRequest } from "./baseRequest";
import { gql } from "@/utils";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { GQL, SiteResponse } from "./types";

const getSitesService = (client: IDeskproClient) => {
  const query = gql`
    query Sites {
      me {
        profiles {
            site { id name brandingName }
        }
      }
    }
  `;

  return baseRequest<GQL<SiteResponse>>(client, { data: query });
};

export { getSitesService };
