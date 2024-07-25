import { get } from "lodash-es";
import { DEFAULT_ERROR } from "@/constants";
import { LansweeperError } from "@/services/lansweeper";
import { Container, ErrorBlock } from "@/components/common";
import type { FC } from "react";
import type { FallbackProps } from "react-error-boundary";

type Props = Omit<FallbackProps, "error"> & {
  error: Error,
};

const ErrorFallback: FC<Props> = ({ error }) => {
  let message = DEFAULT_ERROR;
  let consoleMessage;

  if (error instanceof LansweeperError) {
    message = get(error, ["data","errors", 0, "message"]) || DEFAULT_ERROR;
  }

  // eslint-disable-next-line no-console
  console.error(consoleMessage || error);

  return (
    <Container>
      <ErrorBlock texts={[message]}/>
    </Container>
  );
};

export { ErrorFallback };
