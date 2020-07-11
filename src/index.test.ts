import { parse } from "./index";

test("parse empty", () => {
  expect(parse("")).toEqual([]);
});
