import { useMemo, useCallback } from "react";
import { get, find } from "lodash";
import { Title, TwoProperties } from "@deskpro/app-sdk";
import { useExternalLinks } from "../../hooks";
import { getOS, getHumanCapacity } from "../../utils";
import { ButtonAsLink, LansweeperLogo } from "../common";
import type { FC } from "react";
import type { Maybe } from "../../types";
import type { Site, Device } from "../../services/lansweeper/types";

export type Props = {
  device: Device;
  sites: Site[];
  siteId: Maybe<Site["id"]>;
  onClickTitle?: () => void,
};

const DeviceItem: FC<Props> = ({ sites, siteId, device, onClickTitle }) => {
  const { getDeviceLink } = useExternalLinks();
  const site = useMemo(() => find(sites, { id: siteId }), [sites, siteId]) as Maybe<Site>;
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
        leftLabel="Model"
        leftText={get(device, ["assetCustom", "model"])}
        rightLabel="OS"
        rightText={os}
      />
      <TwoProperties
        leftLabel="Serial number"
        leftText={get(device, ["assetCustom", "serialNumber"])}
        rightLabel="Storage capacity"
        rightText={capacity}
      />
    </>
  );
};

export { DeviceItem };
