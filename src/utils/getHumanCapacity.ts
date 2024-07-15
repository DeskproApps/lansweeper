import { find, round } from "lodash";
import { GiB } from "../constants";
import type { Maybe } from "../types";
import type { DiskPartition } from "../services/lansweeper/types";

const bytesToGB = (bytes: number) => bytes / GiB;

const getHumanCapacity = (partitions?: DiskPartition[]): Maybe<string> => {
  const { available, size } = find(partitions, { mountedOn: "/" }) || {};

  if (!available || !size) {
    return null;
  }

  return `${round(bytesToGB(available), 2)} / ${round(bytesToGB(size), 2)} GB`;
};

export { getHumanCapacity };
