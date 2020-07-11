export function parse(s: string, options?: { escape: boolean }): string[][] {
  if (s.length === 0) return [];
  const escape = options?.escape ?? true;
  return s.split("\n").map((line) =>
    line.split("\t").map((v) => {
      return escape
        ? v.replace(/\\n|\\r|\\t|\\\\/g, (c) =>
            c === "\\n"
              ? "\n"
              : c === "\\r"
              ? "\r"
              : c === "\\t"
              ? "\t"
              : c === "\\\\"
              ? "\\"
              : ""
          )
        : v;
    })
  );
}
