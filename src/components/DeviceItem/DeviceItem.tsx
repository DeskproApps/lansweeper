import { useMemo, useCallback } from "react";
import { get } from "lodash";
import { Title, Property, TwoProperties } from "@deskpro/app-sdk";
import { useExternalLinks } from "../../hooks";
import { getOS, getHumanCapacity } from "../../utils";
import { ButtonAsLink, LansweeperLogo } from "../common";
import type { FC } from "react";
import type { DeviceType } from "../../types";

export type Props = {
  device: DeviceType;
  onClickTitle?: () => void,
};

const DeviceItem: FC<Props> = ({ device, onClickTitle }) => {
  const { getDeviceLink } = useExternalLinks();
  const site = device.site;
  const link = useMemo(() => {
    return getDeviceLink(site?.name, device.key);
  }, [site?.name, device.key, getDeviceLink]);
  const onClick = useCallback(() => {
    onClickTitle && onClickTitle();
  }, [onClickTitle]);
  const os = getOS(get(device, ["operatingSystem"]));
  const capacity = getHumanCapacity(get(device, ["diskPartitions"]));

  return (
    <>
      <Title
        title={!onClickTitle
          ? get(device, ["assetBasicInfo", "name"])
          : (
            <ButtonAsLink
              type="button"
              onClick={onClick}
            >
              {get(device, ["assetBasicInfo", "name"])}
            </ButtonAsLink>
          )
        }
        {...(!link ? {} : { icon: <LansweeperLogo/> })}
        {...(!link ? {} : { link })}
      />
      <TwoProperties
        leftLabel="Site"
        leftText={site?.brandingName || site?.name}
        rightLabel="Model"
        rightText={get(device, ["assetCustom", "model"])}
      />
      <TwoProperties
        leftLabel="OS"
        leftText={os}
        rightLabel="Serial number"
        rightText={get(device, ["assetCustom", "serialNumber"])}
      />
      <Property label="Storage capacity" text={capacity} />
    </>
  );
};

export { DeviceItem };
