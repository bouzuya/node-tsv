import { format as formatOriginal } from "./format";
import { format, parse } from "./index";
import { parse as parseOriginal } from "./parse";

test("re-export format", () => {
  expect(format).toEqual(formatOriginal);
});

test("re-export parse", () => {
  expect(parse).toEqual(parseOriginal);
});

test("format & parse", () => {
  const input = [
    ["123", "4\n5\r6"],
    ["789", "0\t1\\2"],
    ["123", "4\\n5\\r6"],
    ["789", "0\\t1\\\\2"],
  ];
  expect(parse(format(input))).toEqual(input);
});
