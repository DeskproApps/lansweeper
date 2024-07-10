import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@deskpro/app-testing-utils";
import { Logout } from "../Logout";
import { mockCurrentUser } from "../../../../../testing";
import type { Props } from "../Logout";

const renderLogout = (props?: Partial<Props>) => render((
  <Logout
    signOut={props?.signOut || jest.fn()}
    user={props?.user || mockCurrentUser.data}
  />
), { wrappers: { theme: true } });

describe("GlobalSignIn", () => {
  describe("Logout", () => {
    afterEach(() => {
      jest.clearAllMocks();
      cleanup();
    });

    test("render", () => {
      const { queryByText, queryByRole } = renderLogout();
      const signOutButton = queryByRole("button", { name: "Sign-out" });

      expect(queryByText(/Signed-in as/i)).toBeInTheDocument();
      expect(queryByText(/Taras Shevchenko/i)).toBeInTheDocument();
      expect(queryByText(/<taras.shevchenko@unwu.ua>/i)).toBeInTheDocument();
      expect(signOutButton).toBeInTheDocument();
    });

    test("should call signout handler", async () => {
      const mockSignOut = jest.fn();
      const { queryByRole } = renderLogout({ signOut: mockSignOut });
      const signOutButton = queryByRole("button", { name: "Sign-out" }) as Element;

      await userEvent.click(signOutButton);

      expect(mockSignOut).toHaveBeenCalled();
    });
  });
});
