export function parse(s: string, options?: { escape: boolean }): string[][] {
  if (s.length === 0) return [];
  const escape = options?.escape ?? true;
  return s.split("\n").map((line) =>
    line.split("\t").map((v) => {
      return escape
        ? v
            .split("\\n")
            .join("\n")
            .split("\\r")
            .join("\r")
            .split("\\t")
            .join("\t")
            .split("\\\\")
            .join("\\")
        : v;
    })
  );
}
