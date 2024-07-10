import { useState, useCallback } from "react";
import { cloneDeep } from "lodash";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { LoadingSpinner } from "@deskpro/app-sdk";
import { useSetTitle, useRegisterElements } from "../../hooks";
import { useSearchDevices } from "./hooks";
import { LinkDevice } from "../../components";
import type { FC } from "react";
import type { Maybe } from "../../types";
import type { Device } from "../../services/lansweeper/types";

const LinkDevicePage: FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [siteId, setSiteId] = useState<Maybe<any>>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([]);
  const { isLoading, isFetching, sites, devices } = useSearchDevices(siteId, searchQuery);

  const onChangeSearchQuery = useDebouncedCallback(setSearchQuery, 1000);

  const onCancel = useCallback(() => navigate("/home"), [navigate]);

  const onChangeSelectedDevice = useCallback((device: Device) => {
    let newSelectedDevices = cloneDeep(selectedDevices);

    if (selectedDevices.some((selectedDevice) => device.id === selectedDevice.id)) {
      newSelectedDevices = selectedDevices.filter((selectedDevice) => {
        return selectedDevice.id !== device.id;
      });
    } else {
      newSelectedDevices.push(device);
    }

    setSelectedDevices(newSelectedDevices);
  }, [selectedDevices]);

  const onLinkDevices = useCallback(() => {
    //..
  }, []);

  useSetTitle("Link Devices");

  useRegisterElements(({ registerElement }) => {
    registerElement("home", {
      type: "home_button",
      payload: { type: "changePage", path: "/home" },
    });
  });

  if (isLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <LinkDevice
      sites={sites}
      devices={devices}
      onCancel={onCancel}
      isFetching={isFetching}
      onChangeSite={setSiteId}
      isSubmitting={isSubmitting}
      onLinkDevices={onLinkDevices}
      selectedDevices={selectedDevices}
      onChangeSearchQuery={onChangeSearchQuery}
      onChangeSelectedDevice={onChangeSelectedDevice}
    />
  );
};

export { LinkDevicePage };
