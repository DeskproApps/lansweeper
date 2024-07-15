import { baseRequest } from "./baseRequest";
import { gql } from "../../utils";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { Settings } from "../../types";
import type { GQL, CurrentUser } from "./types";

const getCurrentUserService = (
  client: IDeskproClient,
  settings?: Settings,
) => {
  const query = gql`
    query Me {
      me {
          id
          username
          email
          name
          surname
          fullName
          imageUrl
          language
      }
    }
  `;

  return baseRequest<GQL<CurrentUser>>(client, { data: query, settings });
};

export { getCurrentUserService };
