import { useState, useCallback } from "react";
import { get } from "lodash";
import { useNavigate } from "react-router-dom";
import { useDeskproAppClient, useDeskproLatestAppContext } from "@deskpro/app-sdk";
import { deleteEntityService } from "@/services/deskpro";
import { useAsyncError } from "./useAsyncError";
import type { UserContext } from "@/types";
import type { Maybe, DeviceType } from "@/types";

export type Result = {
  isLoading: boolean,
  unlink: (device: Maybe<DeviceType>) => void,
};

const useUnlinkDevice = (): Result => {
  const navigate = useNavigate();
  const { client } = useDeskproAppClient();
  const { context } = useDeskproLatestAppContext() as { context: UserContext };
  const { asyncErrorHandler } = useAsyncError();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dpUserId = get(context, ["data", "user", "id"]);

  const unlink = useCallback((device: Maybe<DeviceType>) => {
    if (!client || !device?.key || !dpUserId) {
      return;
    }

    setIsLoading(true);

    deleteEntityService(client, dpUserId, device.key)
      .then(() => navigate("/home"))
      .catch(asyncErrorHandler)
      .finally(() => setIsLoading(false));
  }, [client, dpUserId, navigate, asyncErrorHandler]);

  return { isLoading, unlink };
};

export { useUnlinkDevice };
