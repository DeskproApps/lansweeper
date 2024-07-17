import { Fragment } from "react";
import { map, isEmpty } from "lodash";
import { Checkbox } from "@deskpro/deskpro-ui";
import { LoadingSpinner, HorizontalDivider } from "@deskpro/app-sdk";
import { Card, NotFound } from "../../common";
import { DeviceItem } from "../../DeviceItem";
import type { FC } from "react";
import type { DeviceType } from "../../../types";

export type Props = {
  isLoading: boolean;
  devices: DeviceType[];
  selectedDevices: DeviceType[];
  onChangeSelectedDevice: (device: DeviceType) => void;
};

const Devices: FC<Props> = ({
  devices,
  isLoading,
  selectedDevices,
  onChangeSelectedDevice,
}) => {
  if (isLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  if (!Array.isArray(devices) || isEmpty(devices)) {
    return (
      <NotFound text="No devices found"/>
    );
  }

  return (
    <>
      {map(devices, (device) => (
        <Fragment key={device.key}>
          <Card>
            <Card.Media>
              <Checkbox
                size={12}
                containerStyle={{ marginTop: 4 }}
                onChange={() => onChangeSelectedDevice(device)}
                checked={selectedDevices.some((selectedDevice) => {
                  return device.key === selectedDevice.key;
                })}
              />
            </Card.Media>
            <Card.Body>
              <DeviceItem
                device={device}
                onClickTitle={() => onChangeSelectedDevice(device)}
              />
            </Card.Body>
          </Card>
          <HorizontalDivider style={{ marginBottom: 6 }} />
        </Fragment>
      ))}
    </>
  );
};

export { Devices };
