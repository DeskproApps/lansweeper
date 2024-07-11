import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@deskpro/app-testing-utils";
import { Buttons } from "../Buttons";
import type { Props } from "../Buttons";

const renderButtons = (props?: Partial<Props>) => render((
  <Buttons
    selectedDevices={props?.selectedDevices || []}
    onCancel={props?.onCancel || jest.fn()}
    onLinkDevices={props?.onLinkDevices || jest.fn()}
    isSubmitting={props?.isSubmitting || false}
  />
), { wrappers: { theme: true } });

describe("LinkDevices", () => {
  describe("Buttons", () => {
    afterEach(() => {
      jest.clearAllMocks();
      cleanup();
    });

    test("render", async () => {
      const { findByRole } = renderButtons();
      const linkButton = await findByRole("button", { name: "Link Devices" });
      const cancelButton = await findByRole("button", { name: "Cancel" });

      expect(linkButton).toBeInTheDocument();
      expect(cancelButton).toBeInTheDocument();
    });

    test("should click \"Link Devices\"", async () => {
      const onLinkDevices = jest.fn();
      const { findByRole } = renderButtons({
        selectedDevices:[{} as never],
        onLinkDevices: onLinkDevices,
      });
      const linkButton = await findByRole("button", { name: "Link Devices" });

      await userEvent.click(linkButton as Element);

      expect(onLinkDevices).toHaveBeenCalledTimes(1);
    });

    test("shouldn't click \"Link Devices\" if no devices", async () => {
      const onLinkDevices = jest.fn();
      const { findByRole } = renderButtons({
        onLinkDevices: onLinkDevices,
      });
      const linkButton = await findByRole("button", { name: "Link Devices" });

      await userEvent.click(linkButton as Element);

      expect(onLinkDevices).not.toHaveBeenCalledTimes(1);
    });


    test("should click \"Cancel\"", async () => {
      const mockOnCancel = jest.fn();
      const { findByRole } = renderButtons({ onCancel: mockOnCancel });
      const cancelButton = await findByRole("button", { name: "Cancel" });

      await userEvent.click(cancelButton as Element);

      expect(mockOnCancel).toHaveBeenCalledTimes(1);
    });
  });
});
