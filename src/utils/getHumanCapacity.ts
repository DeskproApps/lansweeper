import { find } from "lodash";
import prettyBytes from "pretty-bytes";
import type { Maybe } from "../types";
import type { DiskPartition } from "../services/lansweeper/types";

const options = { maximumFractionDigits: 2 };

const pretty = (value: number) => prettyBytes(value, options);

const getHumanCapacity = (partitions?: DiskPartition[]): Maybe<string> => {
  const { available, size } = find(partitions, { mountedOn: "/" }) || {};

  if (!available || !size) {
    return null;
  }

  return `${pretty(available)} / ${pretty(size)}`;
};

export { getHumanCapacity };
