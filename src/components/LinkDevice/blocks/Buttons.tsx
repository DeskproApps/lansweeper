import size from "lodash/size";
import { Stack } from "@deskpro/deskpro-ui";
import { Button } from "../../common";
import type { FC } from "react";
import type { Device } from "../../../services/lansweeper/types";

export type Props = {
  isSubmitting: boolean;
  onCancel: () => void;
  selectedDevices: Device[];
  onLinkDevices: () => void;
};

const Buttons: FC<Props> = ({ isSubmitting, selectedDevices, onLinkDevices, onCancel }) => (
  <Stack justify="space-between">
    <Button
      type="button"
      text="Link Devices"
      disabled={!size(selectedDevices) || isSubmitting}
      loading={isSubmitting}
      onClick={onLinkDevices}
    />
    <Button
      type="button"
      text="Cancel"
      intent="secondary"
      onClick={onCancel}
    />
  </Stack>
);

export { Buttons };
