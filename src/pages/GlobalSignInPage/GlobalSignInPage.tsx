import { useGlobalSignIn } from "./hooks";
import { GlobalSignIn } from "@/components";
import type { FC } from "react";

const GlobalSignInPage: FC = () => {
    const {
        callbackUrl,
        user,
        oAuthUrl,
        isLoading,
        cancelLoading,
        signIn,
        signOut,
        error,
    } = useGlobalSignIn();

    return (
        <GlobalSignIn
            cancelLoading={cancelLoading}
            signIn={signIn}
            signOut={signOut}
            error={error}
            callbackUrl={callbackUrl}
            user={user}
            oAuthUrl={oAuthUrl}
            isLoading={isLoading}
        />
    );
}

export { GlobalSignInPage };
