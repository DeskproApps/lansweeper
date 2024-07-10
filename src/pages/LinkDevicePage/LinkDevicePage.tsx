import { useSetTitle, useRegisterElements } from "../../hooks";
import { LinkDevice } from "../../components";
import type { FC } from "react";

const LinkDevicePage: FC = () => {
  useSetTitle("Link Devices");

  useRegisterElements(({ registerElement }) => {
    registerElement("home", {
      type: "home_button",
      payload: { type: "changePage", path: "/home" },
    });
  });

  return (
    <LinkDevice/>
  );
};

export { LinkDevicePage };
