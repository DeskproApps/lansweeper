import type { Maybe, EventPayload, NavigateToChangePage } from "../types";

const isNavigatePayload = (
  payload?: Maybe<EventPayload>,
): payload is NavigateToChangePage => {
  return Boolean(payload?.path);
};

export { isNavigatePayload };
