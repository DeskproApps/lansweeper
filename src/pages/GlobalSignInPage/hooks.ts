import { useEffect, useMemo, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { get, isString } from "lodash";
import {
    useDeskproAppClient,
    useDeskproAppEvents,
    useInitialisedDeskproAppClient
} from "@deskpro/app-sdk";
import { getAccessTokenService } from "../../services/lansweeper";
import { getQueryParams } from "../../utils";
import { DEFAULT_ERROR } from "../../constants";
import type { Maybe, Settings } from "../../types";
// import type { Account, AuthTokens } from "../services/teamviewer/types";

const useGlobalSignIn = () => {
    const { client } = useDeskproAppClient();
    const [ settings, setSettings ] = useState<Settings>({});
    const [ callbackUrl, setCallbackUrl ] = useState<Maybe<string>>(null);
    const [ poll, setPoll ] = useState<Maybe<(() => Promise<{ token: string }>)>>(null);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ isBlocking, setIsBlocking ] = useState<boolean>(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ user, setUser ] = useState<Maybe<any>>(null);
    const [error, setError] = useState<Maybe<string>>(null);
    const { client_id: clientId, client_secret: clientSecret } = settings;

    const key = useMemo(() => uuidv4(), []);
    const globalAccessToken = get(settings, ["global_access_token"], "");

    const signOut = () => {
        client?.setAdminSetting("");
        setUser(null);
        setSettings({});
    };

    const signIn = useCallback(() => {
      if (!poll || !client || !callbackUrl || !clientId || !clientSecret) {
        return;
      }

      setIsLoading(true);
      setError(null);

      poll()
        .then(({ token }) => {
          // eslint-disable-next-line no-console
          console.log(">>> signIn:code:", token);
          return getAccessTokenService(client, { code: token, clientId, clientSecret, callbackUrl });
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(">>> signIn:then:", res);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(">>> signIn:catch:", { err });
          // eslint-disable-next-line no-console
          console.dir(err);
          setError(isString(err)
            ? err
            : get(err, ["data", "errors", 0, "message"]) || DEFAULT_ERROR
          );
        })
        .finally(() => setIsLoading(false));
    }, [client, poll, callbackUrl, clientId, clientSecret]);

    const cancelLoading = () => setIsLoading(false);

    // Build auth flow entrypoint URL
    const oAuthUrl = useMemo(() => {
      if (!clientId) {
          return null;
      }

      return `https://app.lansweeper.com/authorize-app/${clientId}?${getQueryParams({
        state: key,
      })}`;
    }, [clientId, key]);

    useDeskproAppEvents({
      onAdminSettingsChange: setSettings,
    }, []);

    // Initialise OAuth flow
    useInitialisedDeskproAppClient((client) => {
      client.oauth2()
        .getAdminGenericCallbackUrl(key, /code=(?<token>[^&]+)/, /state=(?<key>[^&]+)/)
        .then(({ callbackUrl, poll }) => {
          setCallbackUrl(callbackUrl);
          setPoll(() => poll);
        });
    }, [key]);

    // Exchange auth code for auth/refresh tokens
    // useInitialisedDeskproAppClient((client) => {
    //     const canRequestAccessToken = every([
    //         accessCode,
    //         callbackUrl,
    //         settings?.client_id,
    //         settings?.client_id,
    //     ]);

    //     if (!canRequestAccessToken) {
    //         return;
    //     }

    //     const url = new URL(`https://webapi.teamviewer.com/api/v1/oauth2/token`);

    //     const requestOptions: FetchOptions = {
    //         method: "POST",
    //         body: new URLSearchParams({
    //             grant_type: "authorization_code",
    //             code: accessCode as string,
    //             client_id: settings?.client_id as string,
    //             client_secret: settings?.client_id as string,
    //         }),
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         },
    //     };

    //     // (async () => {
    //     //     setError(null);

    //     //     try {
    //     //         const fetch = await adminGenericProxyFetch(client);
    //     //         const response = await fetch(url.toString(), requestOptions);
    //     //         const data: {
    //     //             "access_token": string,
    //     //             "token_type": "bearer",
    //     //             "expires_in": number,
    //     //             "refresh_token": string,
    //     //         } = await response.json();

    //     //         const tokens = {
    //     //             accessToken: data.access_token,
    //     //             refreshToken: data.refresh_token,
    //     //         };

    //     //         client.setAdminSetting(JSON.stringify(tokens));
    //     //     } catch (e) {
    //     //         setError(DEFAULT_ERROR);
    //     //     }

    //     //     setIsLoading(false);
    //     // })();
    // }, [accessCode, callbackUrl, settings?.client_id, settings?.secret_id]);

    // Get current TeamViewer user
    // useInitialisedDeskproAppClient((client) => {
    //     if (!isEmpty(settings)) {
    //         getCurrentUserService(client, { settings }, true)
    //             .then(setUser)
    //             .catch(signOut)
    //     }
    // }, [globalAccessToken]);

    // Set blocking flag
    useEffect(() => {
        if (!(callbackUrl && client && poll)) {
            setIsBlocking(true);
        } else if (globalAccessToken && !user) {
            setIsBlocking(true);
        } else {
            setIsBlocking(false);
        }
    }, [callbackUrl, client, poll, globalAccessToken, user]);

    return {
        callbackUrl,
        user,
        oAuthUrl,
        isLoading,
        isBlocking,
        cancelLoading,
        signIn,
        signOut,
        error,
    };
};

export { useGlobalSignIn };
