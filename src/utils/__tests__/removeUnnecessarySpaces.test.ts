import { removeUnnecessarySpaces } from "../removeUnnecessarySpaces";

describe("removeUnnecessarySpaces", () => {
  test("should return string without unnecessary spaces", () => {
    const query = `       query Me {\n viewer     { id name
      email }
    }`;

    expect(removeUnnecessarySpaces(query))
      .toBe("query Me { viewer { id name email } }");
  });
});
