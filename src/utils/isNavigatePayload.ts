import type { Maybe, EventPayload, NavigateToChangePage } from "@/types";

const isNavigatePayload = (
  payload?: Maybe<EventPayload>,
): payload is NavigateToChangePage => {
  return typeof payload === "object" && payload !== null && "path" in payload;
};

export { isNavigatePayload };
