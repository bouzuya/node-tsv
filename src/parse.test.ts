import { parse } from "./parse";

test("empty", () => {
  expect(parse("")).toEqual([]);
});

test("<Space>", () => {
  expect(parse(" ")).toEqual([[" "]]);
});

test("123", () => {
  expect(parse("123")).toEqual([["123"]]);
});

test("123<Tab>456", () => {
  expect(parse("123\t456")).toEqual([["123", "456"]]);
});

test("123<Tab>456<Newline>789<Tab>012", () => {
  expect(parse("123\t456\n789\t012")).toEqual([
    ["123", "456"],
    ["789", "012"],
  ]);
});

test("123<Tab>4\\n5\\r6<Newline>789<Tab>0\\t1\\\\2 (escape: true)", () => {
  const input = "123\t4\\n5\\r6\n789\t0\\t1\\\\2";
  const output = [
    ["123", "4\n5\r6"],
    ["789", "0\t1\\2"],
  ];
  // default: escape: true
  expect(parse(input)).toEqual(output);
  expect(parse(input, { escape: true })).toEqual(output);
});

test("123<Tab>4\\n5\\r6<Newline>789<Tab>0\\t1\\\\2 (escape: false)", () => {
  expect(parse("123\t4\\n5\\r6\n789\t0\\t1\\\\2", { escape: false })).toEqual([
    ["123", "4\\n5\\r6"],
    ["789", "0\\t1\\\\2"],
  ]);
});
