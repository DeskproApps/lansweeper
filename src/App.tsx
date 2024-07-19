import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { match } from "ts-pattern";
import {
  LoadingSpinner,
  useDeskproElements,
  useDeskproAppClient,
  useDeskproAppEvents,
} from "@deskpro/app-sdk";
import { useUnlinkDevice } from "@/hooks";
import { isNavigatePayload, isUnlinkPayload } from "@/utils";
import {
  HomePage,
  DevicePage,
  LinkDevicePage,
  LoadingAppPage,
  GlobalSignInPage,
  AdminCallbackPage,
} from "@/pages";
import { AppContainer } from "@/components/common";
import type { FC } from "react";
import type { EventPayload } from "./types";

const App: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { client } = useDeskproAppClient();
  const { unlink, isLoading } = useUnlinkDevice();
  const isAdmin = pathname.includes("/admin/");

  useDeskproElements(({ registerElement }) => {
    registerElement("refresh", { type: "refresh_button" });
  });

  const debounceElementEvent = useDebouncedCallback((_, __, payload: EventPayload) => {
    return match(payload.type)
      .with("changePage", () => (isNavigatePayload(payload) && navigate(payload.path)))
      .with("unlink", () => (isUnlinkPayload(payload) && unlink(payload.device)))
      .run();
  }, 500);

  useDeskproAppEvents({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onElementEvent: debounceElementEvent,
  }, [client]);

  if (!client || isLoading) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <AppContainer isAdmin={isAdmin}>
      <Routes>
        <Route path="/admin/callback" element={<AdminCallbackPage/>}/>
        <Route path="/admin/global-sign-in" element={<GlobalSignInPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/devices/link" element={<LinkDevicePage/>}/>
        <Route path="/devices/:deviceKey" element={<DevicePage/>}/>
        <Route index element={<LoadingAppPage/>} />
      </Routes>
    </AppContainer>
  );
}

export { App };
