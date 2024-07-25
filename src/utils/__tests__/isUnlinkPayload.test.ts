import { omit } from "lodash-es";
import { isUnlinkPayload } from "../isUnlinkPayload";
import { mockSearchDevices, mockSites } from "@/testing";
import type { DeviceType } from "@/types";

const payload = {
  type: "unlink",
  device: {
    ...mockSearchDevices.data.site.assetResources.items[1],
    site: mockSites.data.me.profiles[0].site,
  } as DeviceType,
};

describe("isUnlinkPayload", () => {
  test.each([undefined, null, "", 0, true, false, {}])("wrong value: %p", (payload) => {
    expect(isUnlinkPayload(payload as never)).toBeFalsy();
  });

  test("shouldn't be unlink payload", () => {
    expect(isUnlinkPayload(omit(payload, ["device"]) as never)).toBeFalsy();
  });

  test("should unlink payload", () => {
    expect(isUnlinkPayload(payload as never)).toBeTruthy();
  });
});
