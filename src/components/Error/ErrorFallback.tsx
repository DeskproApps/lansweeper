import { get } from "lodash-es";
import { DEFAULT_ERROR } from "@/constants";
import { LansweeperError } from "@/services/lansweeper";
import { Container, ErrorBlock } from "@/components/common";
import { FallbackRender } from "@sentry/react";

const ErrorFallback: FallbackRender = ({ error }) => {
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
