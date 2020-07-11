import { format } from "./format";

test("empty", () => {
  expect(format([])).toEqual("");
  expect(format([[]])).toEqual("");
  expect(format([[""]])).toEqual("");
});

test("[[123]]", () => {
  expect(format([["123"]])).toEqual("123");
});

test("[[123,456]]", () => {
  expect(format([["123", "456"]])).toEqual("123\t456");
});

test("[[123,456],[789,012]]", () => {
  expect(
    format([
      ["123", "456"],
      ["789", "012"],
    ])
  ).toEqual("123\t456\n789\t012");
});

test("123<Tab>4\\n5\\r6<Newline>789<Tab>0\\t1\\\\2 (escape: true)", () => {
  const input = [
    ["123", "4\n5\r6"],
    ["789", "0\t1\\2"],
  ];
  const output = "123\t4\\n5\\r6\n789\t0\\t1\\\\2";
  // default: escape: true
  expect(format(input)).toEqual(output);
  expect(format(input, { escape: true })).toEqual(output);
});

test("123<Tab>4\\n5\\r6<Newline>789<Tab>0\\t1\\\\2 (escape: false)", () => {
  expect(
    format(
      [
        ["123", "4\\n5\\r6"],
        ["789", "0\\t1\\\\2"],
      ],
      { escape: false }
    )
  ).toEqual("123\t4\\n5\\r6\n789\t0\\t1\\\\2");
});
