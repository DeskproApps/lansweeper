import { omit } from "lodash-es";
import { getOS } from "../getOS";
import { mockSearchDevices } from "../../../testing";

const mockOS = mockSearchDevices.data.site.assetResources.items[1].operatingSystem;

describe("utils", () => {
  describe("getOS", () => {
    test("should return OS caption", () => {
      expect(getOS(mockOS)).toBe("Darwin 23.5.0");
    });

    test("should return OS name if no cation", () => {
      const osWithoutCaption = omit(mockOS, "caption");
      expect(getOS(osWithoutCaption)).toBe("macOS 14.5 (23F79) 23.5.0");
    });

    test("shouldn't return OS name if no required data", () => {
      const osWithoutName = omit(mockOS, ["caption", "name"]);
      const osWithoutVersion = omit(mockOS, ["caption", "version"]);
      expect(getOS(osWithoutName)).toBeNull();
      expect(getOS(osWithoutVersion)).toBeNull();
    });
  });
});
