import { find, round } from "lodash";
import type { Maybe } from "../types";
import type { DiskPartition } from "../services/lansweeper/types";

const BYTE = 1;
const KB = BYTE * 1024;
const MB = KB * 1024;
const GB = MB * 1024;

const bytesToGB = (bytes: number) => {
  return bytes / GB;
}

const getCapacity = (partitions?: DiskPartition[]): Maybe<string> => {
  const { available, size } = find(partitions, { mountedOn: "/" }) || {};

  if (!available || !size) {
    return null;
  }

  return `${round(bytesToGB(available), 2)} / ${round(bytesToGB(size), 2)} GB`;
};

export { getCapacity };
