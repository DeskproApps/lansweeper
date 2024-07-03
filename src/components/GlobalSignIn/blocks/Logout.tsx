import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { P1, Button } from "@deskpro/deskpro-ui";
import { Secondary } from "../../common";
import type { FC } from "react";
import type { AnyIcon } from "@deskpro/deskpro-ui";

export type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  signOut: () => void;
};

const Logout: FC<Props> = ({ signOut, user }) => (
    <>
        <P1 style={{ marginBottom: "6px" }}>
            Signed-in as <Secondary>{user.name} {user.email ? `<${user.email}>` : ""}</Secondary>
        </P1>
        <Button
            text="Sign-out"
            intent="secondary"
            icon={faSignOut as AnyIcon}
            onClick={signOut}
        />
    </>
);

export { Logout };
