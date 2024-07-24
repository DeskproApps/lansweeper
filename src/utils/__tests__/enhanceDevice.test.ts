import { enhanceDevices, enhanceSearchDevices } from "../enhanceDevice";
import { mockDevices, mockSearchDevices, mockSites } from "../../../testing";

describe("utils", () => {
  describe("enhanceDevices", () => {
    test("should return array of enhanced devices", () => {
      expect(enhanceDevices(mockDevices.data as never)).toMatchObject([
        {
          key: "2f7110c9-99fd-3850-bbf5-c59a70ddd855",
          site: { id: "f866faed-6835-4269-8364-589ceb28cc84" },
        },
        {
          key: "OC1Bc3NldC1hYzIwMDdhOS01YmUzLTRkNzAtYTljNi01YzVhNjZkYTNmZjc=",
          site: { id: "f866faed-6835-4269-8364-589ceb28cc84" },
        }
      ]);
    });
  });

  describe("enhanceSearchDevices", () => {
    test("should return array of enhanced devices", () => {
      const site = mockSites.data.me.profiles[0].site;
      expect(enhanceSearchDevices(mockSearchDevices.data as never, site)).toMatchObject([
        {
          key: "2f7110c9-99fd-3850-bbf5-c59a70ddd855",
          site: { id: "f866faed-6835-4269-8364-589ceb28cc84" },
        },
        {
          key: "OC1Bc3NldC1hYzIwMDdhOS01YmUzLTRkNzAtYTljNi01YzVhNjZkYTNmZjc=",
          site: { id: "f866faed-6835-4269-8364-589ceb28cc84" },
        }
      ]);
    });
  });
});
