import { Stack } from "@deskpro/deskpro-ui";
import { DEFAULT_ERROR } from "../../constants";
import { LansweeperError } from "../../services/lansweeper";
import { Container, ErrorBlock } from "../commmon";
import type { FC } from "react";
import type { FallbackProps } from "react-error-boundary";

type Props = Omit<FallbackProps, "error"> & {
  error: Error,
};

const ErrorFallback: FC<Props> = ({ error }) => {
  const message = DEFAULT_ERROR;
  let consoleMessage;


  if (error instanceof LansweeperError) {
    //..
  }

  // eslint-disable-next-line no-console
  console.error(consoleMessage || error);

  return (
    <Container>
      <ErrorBlock
        text={(
          <Stack gap={6} vertical style={{ padding: "8px" }}>
            {message}
          </Stack>
        )}
      />
    </Container>
  );
};

export { ErrorFallback };
