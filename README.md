# 回路笔记

TanStack Start + shadcn/ui (base-nova) + Tailwind CSS v4，部署在 Vercel。界面规范见 `DESIGN.md`，设计稿是 `index.html`。

## 开发

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # 产物在 .output，本地运行 node .output/server/index.mjs
npm run check    # oxfmt 检查、oxlint、tsc、knip
```

`npm install` 会通过 lefthook 装好 git hooks。提交前自动格式化并 lint 暂存文件，推送前跑类型检查和 knip。

## 提交规范

提交信息用纯英文的 Conventional Commits 格式，由 commitlint 在 commit-msg 阶段检查：

```
feat(posts): add agent loop article
fix: correct rss pubDate timezone
```

类型取 `feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`build`、`ci`、`chore`、`revert`。标题全小写，不超过 72 个字符，不能有中文或其他非 ASCII 字符。

## 写文章

在 `src/content/posts/` 新建一个 `<slug>.ts`，默认导出一个 `Post`（类型见 `src/content/types.ts`）。文件会被自动收录，按日期倒序排列。阅读时长按字数算。

```ts
import type { Post } from "../types"

export default {
  slug: "agent-loop",
  title: "Agent 的循环比模型更重要",
  date: "2026-11-18",
  summary: "一句话摘要，用在列表、RSS、llms.txt 和 meta description。",
  blocks: [
    { type: "lead", text: "首段。" },
    { type: "h2", id: "shape", text: "小节标题" },
    { type: "p", text: "正文段落。", note: "可选的页边旁注。" },
    { type: "code", code: "while (!done) { ... }" },
    { type: "quote", text: "引语。" },
    {
      type: "trace",
      steps: [
        { kind: "think", text: "先弄清项目怎么跑测试" },
        { kind: "tool", call: 'run("npm test")', duration: "8.4s" },
        { kind: "error", text: "2 failed" },
        { kind: "final", text: "改为 UTC 后全部通过" },
      ],
    },
  ],
} satisfies Post
```

## 给爬虫和 LLM 的入口

全部页面走 SSR，HTML 里直接带正文。另外提供：

- `/posts/<slug>.md` 每篇文章的 Markdown 版本，文章页的 `<link rel="alternate">` 指向它。
- `/llms.txt` 文章索引，`/llms-full.txt` 全部正文。
- `/sitemap.xml`、`/robots.txt`、`/rss.xml`。
- 文章页带 `BlogPosting` JSON-LD 和 Open Graph meta。

## 部署

在 Vercel 导入这个目录即可。`vite.config.ts` 里的 `nitro()` 会在 Vercel 构建时自动切到 Vercel 预设。`renderer: false` 是必须的，否则 nitro 会把根目录的设计稿 `index.html` 当成页面模板。
