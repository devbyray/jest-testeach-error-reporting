import { nestedData } from "./dummy-data";

describe("handleRequest with big objects", () => {
  test.each(nestedData)(
    "$testName request should be handled",
    ({ testName, request, response }) => {
      // Yes it should fail on purpose 😅
      expect(request).toStrictEqual(response);
    },
  );
});
