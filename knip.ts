import type { KnipConfig } from "knip"

const cssImports = (text: string) =>
  [...text.matchAll(/@import\s+["']([^"']+)["']/g)]
    .map(([, specifier]) => `import "${specifier}";`)
    .join("\n")

export default {
  entry: ["src/routes/**/*.{ts,tsx}", "src/content/posts/*.ts"],
  project: ["src/**/*.{ts,tsx,css}"],
  ignoreExportsUsedInFile: true,
  compilers: { css: cssImports },
} satisfies KnipConfig
