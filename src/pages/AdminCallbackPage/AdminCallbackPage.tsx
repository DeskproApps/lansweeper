import { FC, useState } from 'react';
import { useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import { AdminCallback } from "@/components";
import { getQueryParams } from '@/utils';
import type { Maybe } from "@/types";

const AdminCallbackPage: FC = () => {
  const [callbackUrl, setCallbackUrl] = useState<Maybe<string>>(null);

  useInitialisedDeskproAppClient(client => {
    client.startOauth2Local(
      ({ callbackUrl, state }) => {
        setCallbackUrl(callbackUrl);

        return `https://app.lansweeper.com/authorize-app/clientID?${getQueryParams({
          state: state
        })}`;
      },
      /^$/,
      async () => ({data: {access_token: ''}}),
      {
        pollInterval: 10000,
        timeout: 600
      }
    );
  }, []);

  return (
    <AdminCallback callbackUrl={callbackUrl} />
  );
};

export { AdminCallbackPage };