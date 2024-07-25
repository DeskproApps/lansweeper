import { Fragment } from "react";
import { HorizontalDivider } from "@deskpro/app-sdk";
import { Container, NotFound } from "@/components/common";
import { DeviceItem } from "@/components/DeviceItem";
import type { FC } from "react";
import type { DeviceType } from "@/types";

export type Props = {
  devices: DeviceType[];
  onNavigateToDevice: (deviceKey: DeviceType["key"]) => void;
};

const Home: FC<Props> = ({ devices, onNavigateToDevice }) => {
  return (
    <Container>
      {(devices?.length === 0) ? (
        <NotFound text="No devices found" />
      ) : devices.map((device) => (
        <Fragment key={device.key}>
          <DeviceItem device={device} onClickTitle={() => onNavigateToDevice(device.key)} />
          <HorizontalDivider style={{ marginBottom: 14 }}/>
        </Fragment>
      ))}
    </Container>
  );
};

export { Home };
