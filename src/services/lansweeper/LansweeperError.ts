import type { LansweeperAPIError } from "./types";

export type InitData = {
  status: number,
  data: LansweeperAPIError,
};

class LansweeperError extends Error {
  status: number;
  data: LansweeperAPIError;

  constructor({ status, data }: InitData) {
    const message = "Lansweeper API Error";
    super(message);

    this.data = data;
    this.status = status;
  }
}

export { LansweeperError };
