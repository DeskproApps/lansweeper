import { useMemo, useCallback } from "react";
import { get, find } from "lodash";
import { Link, Title, TwoProperties } from "@deskpro/app-sdk";
import { useExternalLinks } from "../../hooks";
import { getOS, getCapacity } from "../../utils";
import { LansweeperLogo } from "../common";
import type { FC, MouseEventHandler } from "react";
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
  const onClick: MouseEventHandler<HTMLAnchorElement> = useCallback((e) => {
    e.preventDefault();
    onClickTitle && onClickTitle();
  }, [onClickTitle]);
  const os = useMemo(() => getOS(get(device, ["operatingSystem"])), [device]);
  const capacity = useMemo(() => getCapacity(get(device, ["diskPartitions"])), [device]);

  return (
    <>
      <Title
        title={!onClickTitle
          ? get(device, ["assetBasicInfo", "name"])
          : (
            <Link href="#" onClick={onClick}>
              {get(device, ["assetBasicInfo", "name"])}
            </Link>
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
