import { HorizontalDivider } from "@deskpro/app-sdk";
import { Container } from "../common";
import { Buttons, Filters, Devices } from "./blocks";
import type { FC } from "react";
import type { Maybe } from "../../types";
import type { Site, Device } from "../../services/lansweeper/types";

type Props = {
  sites: Site[];
  devices: Device[];
  isFetching: boolean;
  onCancel: () => void;
  isSubmitting: boolean;
  siteId: Maybe<Site["id"]>;
  selectedDevices: Device[];
  onLinkDevices: () => void;
  onChangeSite: (siteId: Site["id"]) => void;
  onChangeSearchQuery: (search: string) => void;
  onChangeSelectedDevice: (device: Device) => void;
};

const LinkDevice: FC<Props> = ({
  sites,
  siteId,
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
          siteId={siteId}
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
          sites={sites}
          siteId={siteId}
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
