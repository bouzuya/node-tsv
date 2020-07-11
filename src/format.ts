export function format(tsv: string[][], options?: { escape: boolean }): string {
  const escape = options?.escape ?? true;
  return tsv
    .map((line) => {
      return line
        .map((v) => {
          return escape
            ? v.replace(/[\n\r\t\\]/g, (c) =>
                c === "\n"
                  ? "\\n"
                  : c === "\r"
                  ? "\\r"
                  : c === "\t"
                  ? "\\t"
                  : c === "\\"
                  ? "\\\\"
                  : ""
              )
            : v;
        })
        .join("\t");
    })
    .join("\n");
}
