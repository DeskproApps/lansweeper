import { LoadingSpinner } from "@deskpro/app-sdk";
import { useSetTitle, useBadgeCount, useRegisterElements } from "../../hooks";
import { useLinkedDevices } from "./hooks";
import { Home } from "../../components";
import type { FC } from "react";

const HomePage: FC = () => {
  const { devices, isLoading } = useLinkedDevices();

  useSetTitle();

  useBadgeCount(devices.length);

  useRegisterElements(({ registerElement }) => {
    registerElement("plus", {
      type: "plus_button",
      payload: { type: "changePage", path: "/devices/link" },
    });
  });

  if (isLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <Home devices={devices}/>
  );
};

export { HomePage };
