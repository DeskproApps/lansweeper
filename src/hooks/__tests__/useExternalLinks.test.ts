import { cleanup, renderHook } from "@testing-library/react";
import { useExternalLinks } from "../useExternalLinks";
import { mockSites, mockSearchDevices } from "../../../testing";
import type { Result } from "../useExternalLinks";

const mockDevice = mockSearchDevices.data.site.assetResources.items[1];
const mockSite = mockSites.data.me.profiles[0].site;

const renderExternalLinks = () => renderHook<Result, unknown>(() => useExternalLinks());

describe("hooks", () => {
  describe("useLogout", () => {
    afterEach(() => {
      jest.clearAllMocks();
      cleanup();
    });

    test("should return device link", () => {
      const { result: { current: { getDeviceLink } } } = renderExternalLinks();

      expect(getDeviceLink(mockSite.name, mockDevice.key))
        .toBe("https://app.lansweeper.com/ydnp8seh/asset/OC1Bc3NldC1hYzIwMDdhOS01YmUzLTRkNzAtYTljNi01YzVhNjZkYTNmZjc=");
    });

    test("shouldn't return device link", () => {
      const { result: { current: { getDeviceLink } } } = renderExternalLinks();

      expect(getDeviceLink()).toBeNull();
      expect(getDeviceLink(mockSite.name)).toBeNull();
      expect(getDeviceLink(null, mockDevice.key)).toBeNull();
    });
  });
});
