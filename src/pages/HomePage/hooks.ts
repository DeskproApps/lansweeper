import { useMemo } from "react";
import { get } from "lodash-es";
import {
  useQueryWithClient,
  useDeskproLatestAppContext,
} from "@deskpro/app-sdk";
import { getEntityListService } from "../../services/deskpro";
import { getDevicesService } from "../../services/lansweeper";
import { enhanceDevices } from "../../utils";
import { QueryKey } from "../../query";
import type { DPUser, DeviceType, UserContext } from "../../types";

type UseLinkedDevices = () => {
  isLoading: boolean;
  devices: DeviceType[];
};

const useLinkedDevices: UseLinkedDevices = () => {
  const { context } = useDeskproLatestAppContext() as { context: UserContext };
  const dpUserId = get(context, ["data", "user", "id"]);

  const linkedIds = useQueryWithClient(
    [QueryKey.LINKED_DEVICES, dpUserId as DPUser["id"]],
    (client) => getEntityListService(client, dpUserId as DPUser["id"]),
    { enabled: Boolean(dpUserId) },
  );

  const devices = useQueryWithClient(
    [QueryKey.DEVICES, ...(Array.isArray(linkedIds.data) ? linkedIds.data : []) as string[]],
    (client) => getDevicesService(client, linkedIds.data as string[]),
    { enabled: (Array.isArray(linkedIds.data) ? linkedIds.data : []).length > 0 },
  );

  return {
    isLoading: [linkedIds, devices].some(({ isLoading }) => isLoading),
    devices: useMemo(() => enhanceDevices(get(devices.data, ["data"])), [devices.data]),
  };
};

export { useLinkedDevices };
