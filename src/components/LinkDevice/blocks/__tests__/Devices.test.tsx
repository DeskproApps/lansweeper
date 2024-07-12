import { cleanup } from "@testing-library/react";
import { render } from "@deskpro/app-testing-utils";
import { Devices } from "../Devices";
import { mockSearchDevices, mockSites } from "../../../../../testing";
import type { Props } from "../Devices";

const mockDevices = mockSearchDevices.data.site.assetResources.items;
const mockSite = mockSites.data.me.profiles[0].site;

const renderDevices = (props?: Partial<Props>) => render((
  <Devices
    sites={props?.sites || [mockSite] as never}
    siteId={props?.siteId || mockSite.id}
    isLoading={props?.isLoading || false}
    devices={props?.devices || mockDevices as never}
    selectedDevices={props?.selectedDevices || []}
    onChangeSelectedDevice={props?.onChangeSelectedDevice || jest.fn()}
  />
), { wrappers: { theme: true } });

describe("LinkDevices", () => {
  describe("Devices", () => {
    afterEach(() => {
      jest.clearAllMocks();
      cleanup();
    });

    test("render", () => {
      const { queryByText } = renderDevices();

      expect(queryByText(/ilias-mac-book/i)).toBeInTheDocument();
      expect(queryByText(/ilia's mac book/i)).toBeInTheDocument();
    });
  });
});
