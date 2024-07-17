import { useMemo } from "react";
import { get, size } from "lodash";
import {
  useQueryWithClient,
  useDeskproLatestAppContext,
} from "@deskpro/app-sdk";
import { getEntityListService } from "../../services/deskpro";
import { getDevicesService } from "../../services/lansweeper";
import { enhanceDevices } from "../../utils";
import { QueryKey } from "../../query";
import type { DeviceType, UserContext } from "../../types";

type UseLinkedDevices = () => {
  isLoading: boolean;
  devices: DeviceType[];
};

const useLinkedDevices: UseLinkedDevices = () => {
  const { context } = useDeskproLatestAppContext() as { context: UserContext };
  const dpUserId = get(context, ["data", "user", "id"]);

  const linkedIds = useQueryWithClient(
    [QueryKey.LINKED_DEVICES, dpUserId],
    (client) => getEntityListService(client, dpUserId),
    { enabled: Boolean(dpUserId) },
  );

  const devices = useQueryWithClient(
    [QueryKey.DEVICES, ...(Array.isArray(linkedIds.data) ? linkedIds.data : []) as string[]],
    (client) => getDevicesService(client, linkedIds.data as string[]),
    { enabled: size(linkedIds.data) > 0 },
  );

  return {
    isLoading: [linkedIds, devices].some(({ isLoading }) => isLoading),
    devices: useMemo(() => enhanceDevices(get(devices.data, ["data"])), [devices.data]),
  };
};

export { useLinkedDevices };
