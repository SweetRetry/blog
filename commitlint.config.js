const nonAscii = /[^\t\n\r -~]/

export default {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "english-only": ({ raw }) => {
          const text = raw
            .split("\n")
            .filter((line) => !line.startsWith("#"))
            .join("\n")
          return [
            !nonAscii.test(text),
            "commit message must be plain English (ASCII only)",
          ]
        },
      },
    },
  ],
  rules: {
    "english-only": [2, "always"],
    "header-max-length": [2, "always", 72],
    "subject-case": [2, "always", "lower-case"],
    "body-max-line-length": [2, "always", 100],
  },
}
