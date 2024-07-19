import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@deskpro/app-testing-utils";
import { DeviceItem } from "../DeviceItem";
import { mockSites, mockSearchDevices } from "../../../../testing";
import type { Props } from "../DeviceItem";

const mockDevice = {
  ...mockSearchDevices.data.site.assetResources.items[1],
  site: mockSites.data.me.profiles[0].site,
};

const renderDeviceItem = (props?: Partial<Props>) => render((
  <DeviceItem
    device={props?.device ?? mockDevice as never}
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
    expect(queryByText(/Deskpro Ltd./i)).toBeInTheDocument();
    expect(queryByText(/MacBookPro16,1/i)).toBeInTheDocument();
    expect(queryByText(/Darwin 23\.5\.0/i)).toBeInTheDocument();
    expect(queryByText(/C02ZW1CNMD6W/i)).toBeInTheDocument();
    expect(queryByText(/681\.99 GB \/ 1 TB/i)).toBeInTheDocument();
  });

  test("should navogate to details device page", async () => {
    const onClickTitle = jest.fn();
    const { queryByText } = renderDeviceItem({ onClickTitle });
    const deviceTitle = queryByText(/ilia's mac book/i) as Element;

    await userEvent.click(deviceTitle);

    expect(onClickTitle).toHaveBeenCalled();
  });
});
