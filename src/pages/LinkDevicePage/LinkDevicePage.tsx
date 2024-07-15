import { useMemo, useState, useEffect, useCallback } from "react";
import { get, size, cloneDeep } from "lodash";
import { useNavigate } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import {
  LoadingSpinner,
  useDeskproAppClient,
  useDeskproLatestAppContext,
} from "@deskpro/app-sdk";
import { setEntityService } from "../../services/deskpro";
import { useSetTitle, useRegisterElements, useAsyncError } from "../../hooks";
import { useSearchDevices } from "./hooks";
import { INPUT_DEBOUNCE } from "../../constants";
import { LinkDevice } from "../../components";
import type { FC } from "react";
import type { Maybe, UserContext } from "../../types";
import type { Site, Device } from "../../services/lansweeper/types";

const LinkDevicePage: FC = () => {
  const navigate = useNavigate();
  const { client } = useDeskproAppClient();
  const { context } = useDeskproLatestAppContext() as { context: UserContext };
  const { asyncErrorHandler } = useAsyncError();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [siteId, setSiteId] = useState<Maybe<Site["id"]>>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([]);
  const { isLoading, isFetching, sites, devices } = useSearchDevices(siteId, searchQuery);
  const dpUserId = useMemo(() => get(context, ["data", "user", "id"]), [context]);

  const onChangeSearchQuery = useDebouncedCallback(setSearchQuery, INPUT_DEBOUNCE);

  const onCancel = useCallback(() => navigate("/home"), [navigate]);

  const onChangeSelectedDevice = useCallback((device: Device) => {
    let newSelectedDevices = cloneDeep(selectedDevices);

    if (selectedDevices.some((selectedDevice) => device.key === selectedDevice.key)) {
      newSelectedDevices = selectedDevices.filter((selectedDevice) => {
        return selectedDevice.key !== device.key;
      });
    } else {
      newSelectedDevices.push(device);
    }

    setSelectedDevices(newSelectedDevices);
  }, [selectedDevices]);

  const onLinkDevices = useCallback(() => {
    if (!client || !dpUserId || !size(selectedDevices)) {
      return;
    }

    setIsSubmitting(true);

    return Promise.all([
      ...selectedDevices.map((d) => {
        return setEntityService(client, dpUserId, d.key);
      })
    ])
      .then(() => navigate("/home"))
      .catch(asyncErrorHandler)
      .finally(() => setIsSubmitting(false));
  }, [client, dpUserId, selectedDevices, navigate, asyncErrorHandler]);

  // if it's init render, choose the first site
  useEffect(() => {
    if (!siteId) {
      setSiteId(get(sites, [0, "id"]));
    }
  }, [sites, siteId]);

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
      siteId={siteId}
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
