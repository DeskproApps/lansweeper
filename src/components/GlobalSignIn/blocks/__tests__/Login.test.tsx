import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@deskpro/app-testing-utils";
import { Login } from "../Login";
import { mockFailGetAccessToken } from "../../../../../testing";
import type { Props } from "../Login";

const renderLogin = (props?: Partial<Props>) => render((
  <Login
    url={props?.url ?? "https://deskpro.test/auth"}
    error={props?.error}
    isLoading={Boolean(props?.isLoading)}
    signIn={props?.signIn || jest.fn()}
    cancel={props?.cancel || jest.fn()}
  />
), { wrappers: { theme: true } });

describe("GlobalSignIn", () => {
  describe("Login", () => {
    afterEach(() => {
      jest.clearAllMocks();
      cleanup();
    });

    test("render", () => {
      const { queryByText, queryByRole } = renderLogin();
      const signInLink = queryByRole("link", { name: "Sign-In" });

      expect(queryByText(/This Lansweeper user account will be used by all Deskpro agents/i)).toBeInTheDocument();
      expect(signInLink).toBeInTheDocument();
      expect(signInLink).toHaveAttribute("href", "https://deskpro.test/auth");
    });

    test("should show cancel button", () => {
      const { queryByRole } = renderLogin({ isLoading: true });
      const cancelButton = queryByRole("button", { name: "Cancel" });

      expect(cancelButton).toBeInTheDocument();
    });

    test("should call signIn handler", async () => {
      const mockSignIn = jest.fn();
      const { queryByRole } = renderLogin({ signIn: mockSignIn });
      const signInLink = queryByRole("link", { name: "Sign-In" }) as Element;

      await userEvent.click(signInLink);

      expect(mockSignIn).toHaveBeenCalled();
    });

    test("should call cancel handler", async () => {
      const mockCancel = jest.fn();
      const { queryByRole } = renderLogin({ isLoading: true, cancel: mockCancel });
      const cancelButton = queryByRole("button", { name: "Cancel" }) as Element;

      await userEvent.click(cancelButton);

      expect(mockCancel).toHaveBeenCalled();
    });

    test("should show error", () => {
      const { queryByText } = renderLogin({ error: mockFailGetAccessToken.errors[0].message });

      expect(queryByText(/Authorization code not valid for this client ID./i)).toBeInTheDocument();
    });
  });
});
