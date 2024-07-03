import isEmpty from "lodash/isEmpty";
import { Login, Logout } from "./blocks";
import type { FC } from "react";
import type { Maybe } from "../../types";

export type Props = {
    callbackUrl: Maybe<string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: Maybe<any>;
    signOut: () => void;
    oAuthUrl: Maybe<string>;
    error: Maybe<string>;
    isLoading: boolean;
    signIn: () => void;
    cancelLoading: () => void;
};

const GlobalSignIn: FC<Props> = ({
  user,
  error,
  signIn,
  signOut,
  oAuthUrl,
  isLoading,
  cancelLoading,
}) => {
  return !isEmpty(user)
    ? (<Logout user={user} signOut={signOut} />)
    : (
      <Login
          url={oAuthUrl || ""}
          isLoading={isLoading}
          signIn={signIn}
          cancel={cancelLoading}
          error={error}
      />
    )
;
};

export { GlobalSignIn };
