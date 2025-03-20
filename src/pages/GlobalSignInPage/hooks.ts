import { useState, useCallback, useRef } from 'react';
import { get, isString } from "lodash-es";
import {
  IOAuth2,
    useDeskproAppClient,
    useDeskproAppEvents,
    useInitialisedDeskproAppClient
} from "@deskpro/app-sdk";
import { getAccessTokenService, getCurrentUserService } from "@/services/lansweeper";
import { getQueryParams } from "@/utils";
import { DEFAULT_ERROR } from "@/constants";
import type { Maybe, Settings } from "@/types";
import type { CurrentUser } from "@/services/lansweeper/types";

const useGlobalSignIn = () => {
    const { client } = useDeskproAppClient();
    const [ settings, setSettings ] = useState<Settings>({});
    const callbackURLRef = useRef('');
    const [oAuth2Context, setOAuth2Context] = useState<IOAuth2 | null>(null);
    const o = useRef<IOAuth2>();
    const [authorisationURL, setAuthorisationURL] = useState('');
    const [ callbackUrl, setCallbackUrl ] = useState<Maybe<string>>(null);
    const [isPolling, setIsPolling] = useState(false);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ user, setUser ] = useState<Maybe<CurrentUser>>(null);
    const [error, setError] = useState<Maybe<string>>(null);

    const signOut = () => {
      client?.setAdminSetting("");
      setUser(null);
      setSettings({});
    };

    const cancelLoading = () => setIsLoading(false);

    useDeskproAppEvents({
      onAdminSettingsChange: setSettings,
    }, []);

    useInitialisedDeskproAppClient(async client => {
      if (!settings) {
        return;
      };

      if (settings.use_global_access_token === false) {
        return;
      };

      const clientId = settings.client_id ?? '';
      const clientSecret = settings.client_secret ?? '';

      const oauth2Response = await client.startOauth2Local(
        ({ callbackUrl, state }) => {
          callbackURLRef.current = callbackUrl;

          return `https://app.lansweeper.com/authorize-app/${clientId}?${getQueryParams({
            state: state
          })}`;
        },
        /code=(?<code>[^&]+)/,
        async code => {
          const data = await getAccessTokenService(client, {
            code,
            clientId,
            clientSecret,
            callbackUrl: callbackURLRef.current,
          });

          return { data };
        }
      );

      o.current = oauth2Response;
      setOAuth2Context(oauth2Response);
      setAuthorisationURL(oauth2Response.authorizationUrl);
      setCallbackUrl(callbackURLRef.current);
  }, [settings]);

  useInitialisedDeskproAppClient(client => {
    if (!o.current || !client) {
      return;
    };

    const startPolling = async () => {
      try {
        if (!o.current) {
          throw new Error("OAuth2 context is not initialized");
        }
        const pollResult = await o.current.poll();
        const globalAccessToken = JSON.stringify({
          access_token: pollResult.data.access_token,
          refresh_token: pollResult.data.refresh_token ?? ''
        });
        const updatedSettings: Settings = {
          ...settings,
          global_access_token: globalAccessToken
        };

        client.setAdminSetting(globalAccessToken);

        const { data } = await getCurrentUserService(client, updatedSettings);

        setUser(data);
      } catch (error) {
        setError(isString(error)
          ? error
          : get(error, ['data', 'errors', 0, 'message']) || DEFAULT_ERROR
        );
      } finally {
        setIsPolling(false);
        setIsLoading(false);
      };
    };

    if (isPolling) {
      startPolling();
    };
  }, [oAuth2Context, client, settings, isPolling]);

  const onLogIn = useCallback(() => {
    setIsLoading(true);
    setIsPolling(true);
  }, [setIsLoading, setIsPolling]);

    return {
        callbackUrl,
        user,
        oAuthUrl: authorisationURL,
        isLoading,
        cancelLoading,
        signIn: onLogIn,
        signOut,
        error,
    };
};

export { useGlobalSignIn };