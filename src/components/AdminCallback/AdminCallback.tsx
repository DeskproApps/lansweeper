import { CopyToClipboardInput, LoadingSpinner } from "@deskpro/app-sdk";
import { Secondary } from "@/components/common";
import type { FC } from "react";
import type { Maybe } from "@/types";

export type Props = {
  callbackUrl?: Maybe<string>;
};

const AdminCallback: FC<Props> = ({ callbackUrl }) => {
  if (!callbackUrl) {
    return (<LoadingSpinner/>);
  }

  return (
    <>
      <CopyToClipboardInput value={callbackUrl} />
      <Secondary>The callback URL will be required during Lansweeper app setup</Secondary>
    </>
  );
};

export { AdminCallback };
