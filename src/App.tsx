import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import { match } from "ts-pattern";
import {
  LoadingSpinner,
  useDeskproElements,
  useDeskproAppClient,
  useDeskproAppEvents,
} from "@deskpro/app-sdk";
import { isNavigatePayload } from "./utils";
import {
  LoadingAppPage,
  AdminCallbackPage,
  GlobalSignInPage,
} from "./pages";
import { AppContainer } from "./components/common";
import type { FC } from "react";
import type { EventPayload } from "./types";

const App: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { client } = useDeskproAppClient();
  const isAdmin = pathname.includes("/admin/");

  useDeskproElements(({ registerElement }) => {
    registerElement("refresh", { type: "refresh_button" });
  });

  const debounceElementEvent = useDebouncedCallback((_, __, payload: EventPayload) => {
    return match(payload.type)
      .with("changePage", () => {
        if (isNavigatePayload(payload)) {
          navigate(payload.path);
        }
      })
      .run();
  }, 500);

  useDeskproAppEvents({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    onElementEvent: debounceElementEvent,
  }, [client]);

  if (!client) {
    return (
      <LoadingSpinner/>
    );
  }

  return (
    <AppContainer isAdmin={isAdmin}>
      <Routes>
        <Route index element={<LoadingAppPage/>} />
        <Route path="/admin/callback" element={<AdminCallbackPage/>}/>
        <Route path="/admin/global-sign-in" element={<GlobalSignInPage/>}/>
      </Routes>
    </AppContainer>
  );
}

export { App };
