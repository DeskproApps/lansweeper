import { Fragment } from "react";
import { HorizontalDivider } from "@deskpro/app-sdk";
import { Container, NotFound } from "../common";
import { DeviceItem } from "../DeviceItem";
import type { FC } from "react";
import type { DeviceType } from "../../types";

export type Props = {
  devices: DeviceType[];
};

const Home: FC<Props> = ({ devices }) => {
  return (
    <Container>
      {(devices?.length === 0) ? (
        <NotFound text="No devices found" />
      ) : devices.map((device) => (
        <Fragment key={device.key}>
          <DeviceItem device={device}  />
          <HorizontalDivider style={{ marginBottom: 14 }}/>
        </Fragment>
      ))}
    </Container>
  );
};

export { Home };
