import { getHumanCapacity } from "../getHumanCapacity";
import { mockSearchDevices } from "../../../testing";
import type { DiskPartition } from "../../services/lansweeper/types";

const mockPartitions = mockSearchDevices.data.site.assetResources.items[1].diskPartitions as DiskPartition[];

describe("utils", () => {
  describe("getCapacity", () => {
    test("should return capacity", () => {
      expect(getHumanCapacity(mockPartitions)).toBe("635.15 / 932.22 GB");
    });

    test("should return null if no partitions", () => {
      expect(getHumanCapacity()).toBeNull();
    });


    test("should return null if no root partition", () => {
      expect(getHumanCapacity([mockPartitions[1], mockPartitions[3]])).toBeNull();
    });
  });
});
