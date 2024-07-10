import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { P1, Button } from "@deskpro/deskpro-ui";
import { Secondary } from "../../common";
import type { FC } from "react";
import type { AnyIcon } from "@deskpro/deskpro-ui";
import type { User } from "../../../services/lansweeper/types";

export type Props = {
  user: User;
  signOut: () => void;
};

const Logout: FC<Props> = ({ signOut, user }) => (
    <>
        <P1 style={{ marginBottom: "6px" }}>
            Signed-in as <Secondary>{user.me.fullName} {user.me.email ? `<${user.me.email}>` : ""}</Secondary>
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
