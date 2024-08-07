import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { P1, Button, AnchorButton } from "@deskpro/deskpro-ui";
import { nbsp } from "@/constants";
import { Invalid } from "@/components/common";
import type { FC } from "react";
import type { AnyIcon } from "@deskpro/deskpro-ui";
import type { Maybe } from "@/types";

export type Props = {
  url: string;
  error: Maybe<string>;
  isLoading: boolean;
  signIn: () => void;
  cancel: () => void;
};

const Login: FC<Props> = ({ url, isLoading, signIn, cancel, error }) => {
  return (
    <>
      <P1 style={{ marginBottom: "6px" }}>
        This Lansweeper user account will be used by all Deskpro agents
      </P1>
      <AnchorButton
        href={url}
        target="_blank"
        text="Sign-In"
        icon={faSignIn as AnyIcon}
        intent="secondary"
        size="small"
        disabled={!url}
        loading={isLoading}
        onClick={signIn}
      />
      {isLoading && (
        <Button
          onClick={cancel}
          text="Cancel"
          intent="secondary"
          style={{ marginLeft: "6px" }}
        />
      )}
      {(!isLoading && error) && (
        <>{nbsp}<Invalid>{error}</Invalid></>
      )}
    </>
  );
};

export { Login };
