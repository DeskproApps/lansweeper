import { HorizontalDivider } from "@deskpro/app-sdk";
import { Container } from "../common";
import { Buttons, Filters, Devices } from "./blocks";
import type { FC } from "react";
import type { Device } from "../../services/lansweeper/types";

type Props = {
  sites: any[];
  devices: Device[];
  isFetching: boolean;
  onCancel: () => void;
  isSubmitting: boolean;
  selectedDevices: Device[];
  onLinkDevices: () => void;
  onChangeSite: (siteId: any) => void;
  onChangeSearchQuery: (search: string) => void;
  onChangeSelectedDevice: (device: Device) => void;
};

const LinkDevice: FC<Props> = ({
  sites,
  devices,
  onCancel,
  isFetching,
  isSubmitting,
  onChangeSite,
  onLinkDevices,
  selectedDevices,
  onChangeSearchQuery,
  onChangeSelectedDevice,
}) => {
  return (
    <>
      <Container>
        <Filters
          sites={sites}
          isFetching={isFetching}
          onChangeSite={onChangeSite}
          onChangeSearchQuery={onChangeSearchQuery}
        />
        <Buttons
          onCancel={onCancel}
          isSubmitting={isSubmitting}
          onLinkDevices={onLinkDevices}
          selectedDevices={selectedDevices}
        />
      </Container>
      <HorizontalDivider/>
      <Container>
        <Devices
          isLoading={isFetching}
          devices={devices}
          selectedDevices={selectedDevices}
          onChangeSelectedDevice={onChangeSelectedDevice}
        />
      </Container>
    </>
  );
}

export { LinkDevice };
