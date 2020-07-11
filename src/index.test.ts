import { parse } from "./index";
import { parse as parseOriginal } from "./parse";

test("re-export parse", () => {
  expect(parse).toEqual(parseOriginal);
});
