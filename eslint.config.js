export default [
  {
    ignores: ["**/node_modules/**"],
  },
  {
    files: ["src/**/*.js"],
    rules: {
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "directive", next: "*" },
        { blankLine: "always", prev: "*", next: "case" },
        { blankLine: "always", prev: "*", next: "default" },
        { blankLine: "always", prev: ["if", "for", "while", "try", "switch", "block"], next: "*" },
        { blankLine: "always", prev: "*", next: ["if", "for", "while"] },
        { blankLine: "always", prev: "*", next: "function" },
        { blankLine: "always", prev: "function", next: "*" },
      ],
    },
  },
];
