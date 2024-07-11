import { cleanup } from "@testing-library/react";
import { render } from "@deskpro/app-testing-utils";
import { DeviceItem } from "../DeviceItem";
import { mockSearchDevices, mockSites } from "../../../../testing";
import type { Props } from "../DeviceItem";

const mockDevice = mockSearchDevices.data.site.assetResources.items[1];
const mockSite = mockSites.data.me.profiles[0].site;

const renderDeviceItem = (props?: Partial<Props>) => render((
  <DeviceItem
    device={props?.device ?? mockDevice as never}
    siteId={props?.siteId ?? mockSite.id}
    sites={props?.sites ?? [mockSite]}
    onClickTitle={props?.onClickTitle ?? jest.fn()}
  />
), { wrappers: { theme: true } });

describe("DeviceItem", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("render", () => {
    const { queryByText } = renderDeviceItem();

    expect(queryByText(/ilia's mac book/i)).toBeInTheDocument();
    expect(queryByText(/MacBookPro16,1/i)).toBeInTheDocument();
    expect(queryByText(/Darwin 23\.5\.0/i)).toBeInTheDocument();
    expect(queryByText(/C02ZW1CNMD6W/i)).toBeInTheDocument();
    expect(queryByText(/635\.15 \/ 932\.22 GB/i)).toBeInTheDocument();
  });
});
