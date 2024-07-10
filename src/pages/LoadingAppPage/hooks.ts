import { useMemo } from "react";
import { get, size } from "lodash";
import { useNavigate } from "react-router-dom";
import {
  useDeskproLatestAppContext,
  useInitialisedDeskproAppClient,
} from "@deskpro/app-sdk";
import { getEntityListService } from "../../services/deskpro";
import { checkAuthService, refreshAccessTokenService } from "../../services/lansweeper";
import { useAsyncError } from "../../hooks";
import type { UserContext } from "../../types";

type UseLoadingApp = () => void;

const useLoadingApp: UseLoadingApp = () => {
  const navigate = useNavigate();
  const { context } = useDeskproLatestAppContext() as { context: UserContext };
  const { asyncErrorHandler } = useAsyncError();
  const dpUserId = useMemo(() => get(context, ["data", "user", "id"]), [context]);

  useInitialisedDeskproAppClient((client) => {
    if (!dpUserId) {
      return;
    }

    checkAuthService(client)
      .catch(() => refreshAccessTokenService(client))
      .then(() => checkAuthService(client))
      .then(() => getEntityListService(client, dpUserId))
      .then((entityIds) => navigate(size(entityIds) ? "/home" : "/devices/link"))
      .catch(asyncErrorHandler)
  }, [dpUserId, asyncErrorHandler]);
};

export { useLoadingApp };
