import { isString } from "lodash";

const removeUnnecessarySpaces = (value?: string): string => {
  return !isString(value) ? "" : value.replace(/\s+/g, ' ').trim()
};

export { removeUnnecessarySpaces };
