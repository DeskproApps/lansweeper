import { parseGlobalAccessToken } from "../parseGlobalAccessToken";

describe("utils", () => {
  describe("parseGlobalAccessToken", () => {
    test("should return object with tokens", () => {
      expect(parseGlobalAccessToken(`{"access_token":"...","refresh_token":"..."}`)).toMatchObject({
        access_token: "...",
        refresh_token: "...",
      });
    });

    test.each([undefined, null, "", 0, true, false, {}, []])("wrong value: %p", (payload) => {
      expect(parseGlobalAccessToken(payload as never)).toMatchObject({
        access_token: "",
        refresh_token: "",
      });
    });
  });
});
