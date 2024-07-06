import { baseRequest } from "./baseRequest";
import { gql } from "../../utils";
import type { IDeskproClient } from "@deskpro/app-sdk";

const getSitesService = (client: IDeskproClient) => {
  const query = gql`
    query Sites {
      me {
        profiles{
            site { id name companyName }
        }
      }
    }
  `;

  return baseRequest(client, { data: query });
};

export { getSitesService };
