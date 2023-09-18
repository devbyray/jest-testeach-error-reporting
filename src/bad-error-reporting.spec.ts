import { nestedData } from "./dummy-data";

describe("handleRequest with big objects without good reporting", () => {
  test.each(nestedData)("add %o", (input) => {
    // Yes it should fail on purpose 😅
    expect(input.request).toStrictEqual(input.response);
  });
});
