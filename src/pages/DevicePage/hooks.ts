import { useMemo } from "react";
import { get, find } from "lodash";
import { useQueryWithClient } from "@deskpro/app-sdk";
import { getDevicesService } from "@/services/lansweeper";
import { enhanceDevices } from "@/utils";
import { QueryKey } from "@/query";
import type { DeviceType } from "@/types";

type UseDevice = (deviceKey: DeviceType["key"]) => {
  isLoading: boolean;
  device: DeviceType;
};

const useDevice: UseDevice = (deviceKey) => {
  const devicesResponse = useQueryWithClient(
    [QueryKey.DEVICES, deviceKey as string],
    (client) => getDevicesService(client, [deviceKey]),
    { enabled: Boolean(deviceKey) },
  );

  const devices = useMemo(() => enhanceDevices(get(devicesResponse.data, ["data"])), [devicesResponse.data])

  const device = useMemo(() => find(devices, { key: deviceKey }) as DeviceType, [deviceKey, devices]);

  return {
    isLoading: [devicesResponse].some(({ isLoading }) => isLoading),
    device,
  };
};

export { useDevice };
