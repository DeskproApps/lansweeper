import { getCapacity } from "../getCapacity";
import { mockSearchDevices } from "../../../testing";
import type { DiskPartition } from "../../services/lansweeper/types";

const mockPartitions = mockSearchDevices.data.site.assetResources.items[1].diskPartitions as DiskPartition[];

describe("utils", () => {
  describe("getCapacity", () => {
    test("should return capacity", () => {
      expect(getCapacity(mockPartitions)).toBe("635.15 / 932.22 GB");
    });

    test("should return null if no partitions", () => {
      expect(getCapacity()).toBeNull();
    });


    test("should return null if no root partition", () => {
      expect(getCapacity([mockPartitions[1], mockPartitions[3]])).toBeNull();
    });
  });
});
