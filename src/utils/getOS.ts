import type { Maybe } from "@/types";
import type { Device } from "@/services/lansweeper/types";

const getOS = (operatingSystem?: Device["operatingSystem"]): Maybe<string> => {
  const caption = operatingSystem?.caption;
  const name = operatingSystem?.name;
  const version = operatingSystem?.version;

  if (caption) {
    return caption;
  } else if (name && version) {
    return `${name} ${version}`.trim();
  } else {
    return null;
  }
};

export { getOS };
