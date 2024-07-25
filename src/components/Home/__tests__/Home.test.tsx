import { cleanup } from "@testing-library/react";
import { render } from "@deskpro/app-testing-utils";
import { Home } from "../Home";
import { mockDevices as mock } from "../../../../testing";
import type { Props } from "../Home";

const mockDevices = mock.data.authorizedSites.sites[0].assetResources.items;

const renderHome = (props?: Partial<Props>) => render((
  <Home devices={props?.devices ?? mockDevices as never} />
), { wrappers: { theme: true } });

describe("LinkDevices", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("render", () => {
    const { queryByText } = renderHome();

    expect(queryByText(/ilias-mac-book/i)).toBeInTheDocument();
    expect(queryByText(/ilia's mac book/i)).toBeInTheDocument();
  });
});
