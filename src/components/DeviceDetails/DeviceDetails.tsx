import { useMemo } from "react";
import { Title, Property } from "@deskpro/app-sdk";
import { useExternalLinks } from "@/hooks";
import { getOS, getHumanCapacity } from "@/utils";
import { Container, LansweeperLogo } from "@/components/common";
import type { FC } from "react";
import type { DeviceType } from "@/types";

export type Props = {
  device: DeviceType;
};

const DeviceDetails: FC<Props> = ({ device }) => {
  const { getDeviceLink } = useExternalLinks();
  const site = device.site;
  const link = useMemo(() => {
    return getDeviceLink(site?.name, device.key);
  }, [site?.name, device.key, getDeviceLink]);
  const os = getOS(device?.operatingSystem);
  const capacity = getHumanCapacity(device?.diskPartitions);

  return (
    <Container>
      <Title
        title={device?.assetBasicInfo?.name}
        {...(link ? { link, icon: <LansweeperLogo/> } : {})}
      />
      <Property
        label="Site"
        text={site?.brandingName || site?.name}
      />
      <Property
        label="Model"
        text={device?.assetCustom?.model}
      />
      <Property
        label="OS"
        text={os}
      />
      <Property
        label="Serial number"
        text={device?.assetCustom?.serialNumber}
      />
      <Property label="Storage capacity" text={capacity} />
      <Property
        label="IP Address"
        text={device?.assetBasicInfo?.ipAddress}
      />
      <Property
        label="MAC Address"
        text={device?.assetBasicInfo?.mac}
      />
    </Container>
  );
};

export { DeviceDetails };
