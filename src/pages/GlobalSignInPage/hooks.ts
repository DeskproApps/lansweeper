import { useMemo, useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { get, isString } from "lodash-es";
import {
    useDeskproAppClient,
    useDeskproAppEvents,
    useInitialisedDeskproAppClient
} from "@deskpro/app-sdk";
import { getAccessTokenService, getCurrentUserService } from "../../services/lansweeper";
import { getQueryParams } from "../../utils";
import { DEFAULT_ERROR } from "../../constants";
import type { Maybe, Settings } from "../../types";
import type { CurrentUser } from "../../services/lansweeper/types";

const useGlobalSignIn = () => {
    const { client } = useDeskproAppClient();
    const [ settings, setSettings ] = useState<Settings>({});
    const [ callbackUrl, setCallbackUrl ] = useState<Maybe<string>>(null);
    const [ poll, setPoll ] = useState<Maybe<(() => Promise<{ token: string }>)>>(null);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ user, setUser ] = useState<Maybe<CurrentUser>>(null);
    const [error, setError] = useState<Maybe<string>>(null);
    const { client_id: clientId, client_secret: clientSecret } = settings;
    const key = useMemo(() => uuidv4(), []);

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
          return getAccessTokenService(client, { code: token, clientId, clientSecret, callbackUrl });
        })
        .then(({ access_token, refresh_token }) => {
          const globalAccessToken = JSON.stringify({ access_token, refresh_token });
          const updatedSettings: Settings = {
            ...settings,
            global_access_token: globalAccessToken,
          };

          client.setAdminSetting(globalAccessToken);
          return getCurrentUserService(client, updatedSettings);
        })
        .then(({ data }) => setUser(data))
        .catch((err) => {
          setError(isString(err)
            ? err
            : get(err, ["data", "errors", 0, "message"]) || DEFAULT_ERROR
          );
        })
        .finally(() => setIsLoading(false));
    }, [client, poll, callbackUrl, clientId, clientSecret, settings]);

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

    return {
        callbackUrl,
        user,
        oAuthUrl,
        isLoading,
        cancelLoading,
        signIn,
        signOut,
        error,
    };
};

export { useGlobalSignIn };
