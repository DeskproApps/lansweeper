import { HorizontalDivider } from "@deskpro/app-sdk";
import { Container } from "@/components/common";
import { Buttons, Filters, Devices } from "./blocks";
import type { FC } from "react";
import type { Maybe, DeviceType } from "@/types";
import type { Site } from "@/services/lansweeper/types";

type Props = {
  sites: Site[];
  devices: DeviceType[];
  isFetching: boolean;
  onCancel: () => void;
  isSubmitting: boolean;
  siteId: Maybe<Site["id"]>;
  selectedDevices: DeviceType[];
  onLinkDevices: () => void;
  onChangeSite: (siteId: Site["id"]) => void;
  onChangeSearchQuery: (search: string) => void;
  onChangeSelectedDevice: (device: DeviceType) => void;
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
