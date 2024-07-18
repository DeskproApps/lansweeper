import { Fragment } from "react";
import { map, isEmpty } from "lodash";
import { HorizontalDivider } from "@deskpro/app-sdk";
import { Container, NotFound } from "../common";
import { DeviceItem } from "@/components/DeviceItem";
import type { FC } from "react";
import type { DeviceType } from "@/types";

export type Props = {
  devices: DeviceType[];
};

const Home: FC<Props> = ({ devices }) => {
  return (
    <Container>
      {isEmpty(devices) ? (
        <NotFound text="No devices found" />
      ) : map(devices, (device) => (
        <Fragment key={device.key}>
          <DeviceItem device={device}  />
          <HorizontalDivider style={{ marginBottom: 14 }}/>
        </Fragment>
      ))}
    </Container>
  );
};

export { Home };
