# @bouzuya/tsv

format/parse TSV format.

## Installation

```bash
$ npm install @bouzuya/tsv
# ...
```

## Usage

```typescript
import assert from "assert";
import { format, parse } from "@bouzuya/tsv";

assert.deepStrictEqual(
  format([
    ["123", "456"],
    ["789", "012"],
  ),
  "123\t456\n789\t012"
);
assert.deepStrictEqual(parse("123\t456\n789\t012"), [
  ["123", "456"],
  ["789", "012"],
]);

// escape: true
assert.deepStrictEqual(
  format([["123", "\\", "\n", "\r", "\t"], ["456"]]), // default: { escape: true }
  "123\t\\\\\t\\n\t\\r\t\\t\n456"
);
assert.deepStrictEqual(
  parse("123\t\\\\\t\\n\t\\r\t\\t\n456"), // default: { escape: true }
  [["123", "\\", "\n", "\r", "\t"], ["456"]]
);

// escape: false
assert.deepStrictEqual(
  format([["123", "\\", "\n", "\r", "\t"], ["456"]], { escape: false }),
  "123\t\\\t\n\t\r\t\t\n456"
);
assert.deepStrictEqual(
  parse("123\t\\\t\n\t\r\t\t\n456", { escape: false }),
  [['123', '\\', ''], ['', '\r', '', ''], ['456']]
);
```
