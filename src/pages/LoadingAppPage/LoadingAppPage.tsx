import { LoadingSpinner, useDeskproLatestAppContext, useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import { useAuthentication, useSetTitle } from "@/hooks";
import type { FC } from "react";
import { Settings, UserData } from "@/types";
import { getEntityListService } from "@/services/deskpro";
import { ErrorBlock } from "@/components/common";
import { useNavigate } from "react-router-dom";
import { Stack } from "@deskpro/deskpro-ui";


const LoadingAppPage: FC = () => {
  useSetTitle();

  const { context } = useDeskproLatestAppContext<UserData, Settings>()
  const deskproUser = context?.data?.user

  const { isLoading, isAuthenticated } = useAuthentication({ refreshTokens: true })
  const navigate = useNavigate();

  useInitialisedDeskproAppClient((client) => {
    if (isLoading || !deskproUser || !isAuthenticated) {
      return
    }

    getEntityListService(client, deskproUser.id)
      .then((entityIds) => {
        navigate((entityIds?.length > 0) ? "/home" : "/devices/link")
      })
  }, [isLoading, deskproUser, isAuthenticated, navigate])

  if (isLoading || !deskproUser) {
    return (
      <LoadingSpinner />
    )
  }

  if (!isAuthenticated) {
    return (
      <Stack padding={12}>
        <ErrorBlock texts={
          [
            "The Lansweeper credentials stored during app setup are invalid or expired. Please contact your administrator to verify and try again."
          ]} />
      </Stack>
    )
  }


  return (
    <LoadingSpinner />
  )

};

export { LoadingAppPage };
