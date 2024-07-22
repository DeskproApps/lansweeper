import { omit } from "lodash";
import { cleanup } from "@testing-library/react";
import { render } from "@deskpro/app-testing-utils";
import { DeviceDetails } from "../DeviceDetails";
import { mockDevices } from "@/testing";
import type { Props } from "../DeviceDetails";

const mock = {
  site: omit(mockDevices.data.authorizedSites.sites[0], ["assetResources"]),
  ...mockDevices.data.authorizedSites.sites[0].assetResources.items[1],
} as Props["device"];

const renderDeviceDetails = (props?: Partial<Props>) => render((
  <DeviceDetails
    device={props?.device || mock}
  />
), { wrappers: { theme: true } });

describe("DeviceDetails", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("render", () => {
    const { queryByText } = renderDeviceDetails();

    expect(queryByText(/ilia's mac book/i)).toBeInTheDocument();
    expect(queryByText(/Deskpro Ltd./i)).toBeInTheDocument();
    expect(queryByText(/MacBookPro16,1/i)).toBeInTheDocument();
    expect(queryByText(/Darwin 23\.5\.0/i)).toBeInTheDocument();
    expect(queryByText(/C02ZW1CNMD6W/i)).toBeInTheDocument();
    expect(queryByText(/681\.99 GB \/ 1 TB/i)).toBeInTheDocument();
    expect(queryByText(/192\.168\.1\.159/i)).toBeInTheDocument();
    expect(queryByText(/F8:FF:C2:47:F0:93/i)).toBeInTheDocument();
  });
});
