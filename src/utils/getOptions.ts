import { getOption } from "./getOption";
import type { ReactNode } from "react";

const getOptions = <T extends { id: string; [key: string]: ReactNode }>(items?: T[], key?: keyof T) => {
  if (!Array.isArray(items) || items.length <= 0) {
    return [];
  }

  return items.map((item) => {
    return getOption(item.id, item[key || "name"]);
  });
};

export { getOptions };
