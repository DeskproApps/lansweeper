import { useMemo } from "react";
import { get } from "lodash";
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
  const os = getOS(get(device, ["operatingSystem"]));
  const capacity = getHumanCapacity(get(device, ["diskPartitions"]));

  return (
    <Container>
      <Title
        title={get(device, ["assetBasicInfo", "name"])}
        {...(!link ? {} : { icon: <LansweeperLogo/> })}
        {...(!link ? {} : { link })}
      />
      <Property
        label="Site"
        text={site?.brandingName || site?.name}
      />
      <Property
        label="Model"
        text={get(device, ["assetCustom", "model"])}
      />
      <Property
        label="OS"
        text={os}
      />
      <Property
        label="Serial number"
        text={get(device, ["assetCustom", "serialNumber"])}
      />
      <Property label="Storage capacity" text={capacity} />
      <Property
        label="IP Address"
        text={get(device, ["assetBasicInfo", "ipAddress"])}
      />
      <Property
        label="MAC Address"
        text={get(device, ["assetBasicInfo", "mac"])}
      />
    </Container>
  );
};

export { DeviceDetails };
