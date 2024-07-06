import { get } from "lodash";
import { Title } from "@deskpro/app-sdk";
import type { FC } from "react";
import type { Device } from "../../services/lansweeper/types";

type Props = {
  device: Device;
  onClickTitle?: () => void,
};

const DeviceItem: FC<Props> = ({ device, onClickTitle }) => {
  return (
    <Title title={get(device, ["assetBasicInfo", "name"])}/>
  );
};

export { DeviceItem };
