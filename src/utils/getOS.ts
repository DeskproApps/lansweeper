import { get, trim } from "lodash";
import type { Maybe } from "../types";
import type { Device } from "../services/lansweeper/types";

const getOS = (operatingSystem?: Device["operatingSystem"]): Maybe<string> => {
  const caption = get(operatingSystem, ["caption"]);
  const name = get(operatingSystem, ["name"]);
  const version = get(operatingSystem, ["version"]);

  if (caption) {
    return caption;
  } else if (name && version) {
    return trim(`${name} ${version}`);
  } else {
    return null;
  }
};

export { getOS };
