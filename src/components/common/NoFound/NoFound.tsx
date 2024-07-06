import { P1 } from "@deskpro/deskpro-ui";
import type { FC } from "react";

export type Props = {
  text?: string,
};

const NoFound: FC<Props> = ({ text = "No found" } = {}) => (
  <P1>{text}</P1>
);

export { NoFound };
