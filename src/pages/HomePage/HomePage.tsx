import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "@deskpro/app-sdk";
import { useSetTitle, useBadgeCount, useRegisterElements } from "@/hooks";
import { useLinkedDevices } from "./hooks";
import { Home } from "@/components";
import type { FC } from "react";
import type { DeviceType } from "@/types";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { devices, isLoading } = useLinkedDevices();

  const onNavigateToDevice = useCallback((deviceKey: DeviceType["key"]) => {
    navigate(`/devices/${deviceKey}`);
  }, [navigate]);

  useSetTitle();

  useBadgeCount(devices);

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
    <Home devices={devices} onNavigateToDevice={onNavigateToDevice} />
  );
};

export { HomePage };
