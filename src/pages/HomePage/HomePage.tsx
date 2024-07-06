import { useSetTitle, useRegisterElements } from "../../hooks";
import { Home } from "../../components";
import type { FC } from "react";

const HomePage: FC = () => {
  useSetTitle();

  useRegisterElements(({ registerElement }) => {
    registerElement("plus", {
      type: "plus_button",
      payload: { type: "changePage", path: "/devices/link" },
    });
  });

  return (
    <Home/>
  );
};

export { HomePage };
