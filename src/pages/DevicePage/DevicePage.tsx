import { useParams } from "react-router-dom";
import { LoadingSpinner } from "@deskpro/app-sdk";
import { useSetTitle, useRegisterElements } from "@/hooks";
import { DeviceDetails } from "@/components";
import { useDevice } from "./hooks";
import type { FC } from "react";

const DevicePage: FC = () => {
  const { deviceKey } = useParams();
  const { isLoading, device } = useDevice(deviceKey);

  useSetTitle();

  useRegisterElements(({ registerElement }) => {
    registerElement("home", {
      type: "home_button",
      payload: { type: "changePage", path: "/home" },
    });
    registerElement("menu", {
      type: "menu",
      items: [{
        title: "Unlink device",
        payload: { type: "unlink", device },
      }],
    });
  }, [device]);

  if (isLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <DeviceDetails device={device}/>
  );
};

export { DevicePage };
