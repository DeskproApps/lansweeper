import type { EventPayload, UnlinkPayload } from "@/types";

const isUnlinkPayload = (
  payload: EventPayload,
): payload is UnlinkPayload => {
  return payload?.type === "unlink" && typeof payload === "object" && payload !== null && "device" in payload;
};

export { isUnlinkPayload };
