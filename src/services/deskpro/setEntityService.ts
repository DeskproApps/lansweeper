import { ENTITY } from "../../constants";
import type { IDeskproClient } from "@deskpro/app-sdk";
import type { Device } from "../lansweeper/types";
import type { DPUser } from "../../types";

const setEntityService = (
  client: IDeskproClient,
  userId: DPUser["id"],
  entity: Device["key"],
) => {
  return client
    .getEntityAssociation(ENTITY, userId)
    .set(`${entity}`);
};

export { setEntityService };
