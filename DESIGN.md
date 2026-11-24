---
version: alpha
name: 回路笔记
description: 一个关于 AI 与 agent 的个人博客的设计语言，基于 Tailwind CSS v4 与 shadcn/ui（base-nova）。
colors:
  background: "#F8F6F1"
  foreground: "#262421"
  muted: "#EFEBE2"
  muted-foreground: "#6F695F"
  border: "#E4DFD4"
  primary: "#262421"
  primary-foreground: "#F8F6F1"
  brand: "#9A3B1F"
  destructive: "#9A3B1F"
  ring: "#9A3B1F"
  dark:
    background: "#191816"
    foreground: "#E9E5DD"
    muted: "#22211E"
    muted-foreground: "#8E897F"
    border: "#2F2D29"
    primary: "#E9E5DD"
    primary-foreground: "#191816"
    brand: "#E0896B"
    destructive: "#E0896B"
    ring: "#E0896B"
typography:
  display:
    fontFamily: Iowan Old Style, Songti SC, Noto Serif SC, Georgia, serif
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.3
  headline:
    fontFamily: Iowan Old Style, Songti SC, Noto Serif SC, Georgia, serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.5
  body-lead:
    fontFamily: Iowan Old Style, Songti SC, Noto Serif SC, Georgia, serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.8
  body:
    fontFamily: Iowan Old Style, Songti SC, Noto Serif SC, Georgia, serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.9
  code:
    fontFamily: SF Mono, ui-monospace, Menlo, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.75
  meta:
    fontFamily: Iowan Old Style, Songti SC, Noto Serif SC, Georgia, serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: '"lnum" 1, "tnum" 1'
rounded:
  none: 0px
  md: 4px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  4xl: 96px
  measure: 46rem
  code-bleed: 24px
  wide-breakpoint: 1060px
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  link-underline:
    duration: 300ms
    delay: 0ms
    timingFunction: ease-out
  reading-progress:
    duration: 80ms
    delay: 0ms
    timingFunction: linear
  trace-step:
    duration: 280ms
    delay: 420ms
    timingFunction: ease-out
  surface-enter:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-exit:
    duration: 100ms
    delay: 0ms
    timingFunction: ease-out
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.meta}"
    rounded: "{rounded.md}"
    padding: 6px 14px
  button-ghost:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.meta}"
    padding: 0px
  button-ghost-hover:
    textColor: "{colors.foreground}"
  link:
    textColor: "{colors.foreground}"
  link-hover:
    textColor: "{colors.brand}"
  code-block:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: 20px 24px
  note-marker:
    textColor: "{colors.brand}"
  tooltip:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    typography: "{typography.meta}"
    rounded: "{rounded.md}"
  divider:
    backgroundColor: "{colors.border}"
  error-text:
    textColor: "{colors.destructive}"
    typography: "{typography.meta}"
  focus-ring:
    backgroundColor: "{colors.ring}"
  page:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
  page-dark:
    backgroundColor: "{colors.dark.background}"
    textColor: "{colors.dark.foreground}"
  button-primary-dark:
    backgroundColor: "{colors.dark.primary}"
    textColor: "{colors.dark.primary-foreground}"
  button-ghost-dark:
    textColor: "{colors.dark.muted-foreground}"
  link-hover-dark:
    textColor: "{colors.dark.brand}"
  code-block-dark:
    backgroundColor: "{colors.dark.muted}"
  divider-dark:
    backgroundColor: "{colors.dark.border}"
  error-text-dark:
    textColor: "{colors.dark.destructive}"
  focus-ring-dark:
    backgroundColor: "{colors.dark.ring}"
---

# 回路笔记

回路笔记是一个记录 AI 与 agent 思考的个人博客。它的样子像一份认真誊写的讲义。暖纸底色，衬线正文，所有内容落在同一条左边线上，全站只有一种强调色。

界面通用规则以 sweet-mode 为底，本文件只写这个博客的取值、覆盖和 agent 按默认会做错的判断。两者冲突时以本文件为准。设计版是同目录下的 `@index.html`。

## Overview

**性格。** 每个词都落到可观测的规则上。

- **安静。** 全站只有铁锈色一种强调色，只出现在下文列出的六处。没有装饰性图形，没有阴影。不用渐变、光斑或毛玻璃来显得精致。
- **精确。** 首页和文章页的所有内容共用一条左边线。字号只有五档。日期写成 `11.18` 这种等宽数字并右对齐。不用中文月日格式，因为宽度不齐。
- **温和。** 暖纸底色，衬线正文，作者用第一人称说话。不用纯白底和系统无衬线字体。

**受众。** 正在做 agent 的工程师和产品人。读起来应该像一份想清楚了的讲义，而不是产品官网或技术文档站。

**最近的邻居。** 这个博客不能像下面这些：

- 未改动的 shadcn base-nova 默认样式。中性灰，无衬线，紧凑，文章列表做成卡片，标签放进徽章。
- 常见的 Next.js 博客模板。居中大标题，下面接一列卡片。
- 极客终端风。深色底，等宽字体，荧光色。
- AI 产品落地页。渐变、光斑、发光边框。

**它靠这五件事区别于邻居。**

1. 暖纸底上的中文衬线正文。
2. 单轴排版。代码块的底色向两侧伸出 24px，代码文字仍落在正文的左边线上。
3. 旁注收在正文的编号里，悬停或点按编号时浮出，不占文档流。
4. 文章里的 agent 运行记录做成可重放的步骤列表。
5. 铁锈色只用在五处：链接悬停、注释编号、阅读进度线、引语上方的短线、运行记录里的报错。

**冲突优先级。** 需求互相冲突时，依次保护这几样：

1. 正文可读性。
2. 对齐与节奏。
3. 内容真实。不造数据、统计和日期。
4. shadcn 组件的默认行为。
5. 装饰细节。

**底线。** 下面这些在任何页面都成立：

- 上面的性格、邻居清单、五条区别和冲突优先级。
- Voice 一节的身份和人称。
- Do's and Don'ts 里的封杀清单和无障碍下限。
- Components 里的封闭词表。

其余规则都是默认值，可以被 Surfaces 一节针对某类页面覆盖。

## Colors

颜色用 shadcn 的语义名，每个颜色都是一个 utility，比如 `bg-background`、`text-muted-foreground`。本博客只新增一个 `brand`，就是铁锈色。业务代码不写色值。

- **亮暗两套主题，跟随系统。** 亮色是暖纸底。暗色是暖黑底，不是冷灰黑。页面上不放切换按钮。
- **中性色偏暖。** 新增的中性色保持在现有的暖色相上，只调明度。
- **强调色要稀少。** `brand` 只用在 Overview 列出的六处，不做背景，不做大面积填充。
- **主操作用墨色。** 主按钮用 `bg-primary`，也就是正文的墨色，不用 `brand`。强调色留给链接和注释，主按钮不和它们抢注意力。
- **状态色只有报错一种。** 报错用 `text-destructive`，和 `brand` 同色，并且总是配文字。不用绿色表示成功，成功只用文字确认。
- **文字层级只有两档。** 读的内容用 `text-foreground`，元信息用 `text-muted-foreground`。不用透明度降低文字对比度。

## Typography

全站一种衬线字体族，`font-serif` 定义为 Iowan Old Style 加 Songti SC。等宽字体 `font-mono` 只用在代码块和运行记录里的工具调用上。字号全部用 Tailwind 标准档，不写 `text-[*]`。

| Token       | Class                    | 角色                                       |
| ----------- | ------------------------ | ------------------------------------------ |
| `display`   | `text-3xl font-semibold` | 文章标题，一页只有一个                     |
| `headline`  | `text-xl font-semibold`  | 文章内小节标题                             |
| `body-lead` | `text-xl`                | 文章首段、首页介绍、引语                   |
| `body`      | `text-lg`                | 正文、首页文章标题                         |
| `code`      | `text-sm font-mono`      | 代码块、工具调用                           |
| `meta`      | `text-xs`                | 日期、年份、阅读时长、旁注、导航、文字按钮 |

- 字重只用 400 和 600。
- 小节标题和首段字号相同，靠字重区分。不要再加一档字号。
- 日期、时长、耗时用 `tabular-nums lining-nums`。正文里的数字保持默认。
- 会折行的标题加 `text-balance`。

## Layout

**单轴。** 首页和文章页共用一个单栏网格，栏宽 46rem（约 40 个汉字），水平居中。所有文字的起始边落在这条左边线上。不把元信息挂到左边线外侧，日期和时长写在标题下方。没有旁注栏，旁注用浮层显示。

- **间距只取 8 的倍数。** 首页头部到介绍 64px，介绍到列表 64px，年份组之间 40px，文章行上下各 6px。文章段落之间 24px，小节标题上方 40px、下方 16px，代码块和运行记录上下 32px。
- **代码块出血。** 代码块左右各伸出 24px，内边距也是 24px，所以代码文字和正文对齐。
- **列表不画分隔线。** 首页文章列表只靠留白和年份小标题分组。标题在左，日期在右。
- **旁注是浮层。** 正文里的铁锈色编号是触发器。悬停、点按或键盘聚焦后按回车，旁注以反色浮层出现在编号上方，样式同 Tooltip，最宽 `max-w-xs`。窄屏同样点按打开。
- **Nova 的紧凑间距只作用在控件内部。** 页面间距按上面的规则来，不跟随 Nova。

## Elevation & Depth

不用阴影。层级靠两样东西：明度差和细线。

- 代码块用 `bg-muted`，比纸面深一档，不加边框。
- 运行记录和示意图用上下两条 `border-border` 细线和正文隔开，不加底色，不加边框盒。示意图只用内联 SVG 和站内语义色（细线、暖灰底和极少铁锈色标注关键状态或异常），不用渐变、阴影或装饰图标。
- 引语不加左边框，只在上方放一条 24px 长的铁锈色短线。
- Tooltip 反色显示，用 `bg-foreground text-background`。浮层不叠浮层。

## Shapes

`--radius` 设为 `0.25rem`，也就是 4px。代码块、按钮、Tooltip 都用 `rounded-md`。其他元素都是直角。不使用 Nova 默认的 10px 圆角，因为它放在衬线和纸面旁边像 App 界面。

## Illustration

不用图标，也不用插画。

- 导航、RSS、复制、重放都写成文字。
- 空态只写一行字。这一条覆盖 sweet-mode 对主列表空态要配业务插画的要求，理由是博客的空态只在第一篇文章发布前出现一次。

## Motion & Micro-interaction

只有四样东西会动，每样都有对应的目的。

| 什么动                                               | Token              | 目的     |
| ---------------------------------------------------- | ------------------ | -------- |
| 链接和文章标题悬停时，下划线从左画到右，文字变铁锈色 | `link-underline`   | 反馈     |
| 文章页顶部 2px 阅读进度线跟随滚动                    | `reading-progress` | 状态指示 |
| 运行记录点"重放"后，步骤逐条淡入，每条间隔 420ms     | `trace-step`       | 解释     |
| 复制代码后，按钮文字变成"已复制"，1.4 秒后恢复       | `state-change`     | 反馈     |

- 页面切换、首页列表、标题都不加入场动画。
- Tooltip 和旁注浮层用 `surface-enter` 和 `surface-exit`，展开原点用 Base UI 的 `--transform-origin`，进场和退场样式写在 `data-starting-style` 和 `data-ending-style` 上。
- 只过渡 `transform`、`opacity` 和颜色。
- 系统开了减少动态效果时，下划线直接出现，重放直接显示全部步骤，进度线照常工作。

## Voice & Content Strategy

- **身份。** 作者本人，用"我"，写给同行。中文，短句，先说结论。
- **有温度的时刻。** 首页介绍和空态可以带一点个人语气。
  - 首页："记录一些突发的思考。"
  - 空态："这里还没有文章。第一篇在写了。"
- **必须平实的时刻。** 报错和 404 只说发生了什么、接下来怎么办，不用俏皮话。
  - 404："这页不存在。可能是链接写错了，回到文章列表。"
  - 加载失败："文章没有加载出来。刷新一下试试。"
- **按钮写动词。** 写"复制""重放""订阅 RSS"，不写"确定"或"提交"。
- **日期。** 首页列表写 `11.18`，年份放在组标题上。文章页写 `2026.11.18`。不用相对时间。
- **阅读时长。** 写"12 分钟"，不写"12 min read"。
- **拼接字段。** 只有文章元信息这一行可以用 `·` 连接日期和时长，因为这两个字段从不单独被扫读。这一条覆盖 sweet-mode 一个字段一个位置的规则。其他地方不用 `·` 拼接。
- **术语。** 沿用"agent""eval""context"等英文原词，不硬译。同一个概念全站只用一个名字。
- 不用 emoji，不用感叹号。

## Components

`components.json` 的 `style` 是 `base-nova`，底层是 Base UI，用 `npx shadcn@latest add` 安装到 `components/ui`。外观改在组件变体里，调用点只负责布局。

**封闭词表。** 只用下面这些：

| 组件    | 变体                 | 用途                                                               |
| ------- | -------------------- | ------------------------------------------------------------------ |
| Button  | `default`，size `sm` | 每页至多一个，比如"订阅 RSS"                                       |
| Button  | `ghost`              | 文字按钮，比如"复制""重放"，样式是 meta 字号的灰色文字，悬停变墨色 |
| Button  | `link`               | 需要按钮语义的链接                                                 |
| Tooltip | 默认                 | 只给被截断的标题补全文                                             |
| Popover | `openOnHover`        | 旁注，悬停和点按都能打开，直接用 Base UI                           |

文章标题、列表、代码块、运行记录、旁注、引语都是排版元素，不是组件，样式按上文的 Token 写。要加新组件，先用 base-nova 安装，再在这张表里登记。

**状态各靠什么区分。**

- **悬停。** 文字从灰色变墨色，或者链接变铁锈色并画出下划线。不改底色。
- **焦点。** `focus-visible` 时显示 2px 铁锈色描边，外扩 3px。所有可点元素都要有。
- **禁用。** 博客里没有禁用态。真需要时用 `disabled:opacity-50`，并且写出禁用原因。
- **加载。** 冷加载时文章区只保留一行高度的占位，不用骨架屏。
- **空。** 一行 `text-muted-foreground` 文字，文案见 Voice。
- **错误。** 一行 `text-destructive` 文字，就地显示，不弹 toast。

## Surfaces

| 页面   | 首要任务           | 使用条件                                 | 覆盖的默认值                          |
| ------ | ------------------ | ---------------------------------------- | ------------------------------------- |
| 首页   | 扫一眼有什么新文章 | 每次访问的第一屏，读者想快速判断要不要读 | 无                                    |
| 文章页 | 读完一篇长文       | 读者已经决定读，需要专注                 | 正文用 `body`，有旁注浮层和阅读进度线 |
| 关于页 | 认识作者           | 很少访问                                 | 无                                    |
| 404    | 回到文章列表       | 读者走错了路，可能有点烦                 | 只有一句平实文案和一个回首页的链接    |

## Do's and Don'ts

**封杀清单。** 每一条先写这个博客怎么做，再写它因此不用什么。

- 用一句左对齐的介绍说明这是什么。不用居中大标题加三张图标卡片。
- 用留白和年份小标题分组。不用卡片，也不用卡片套卡片和层层描边。
- 靠排版和对齐显得精致。不用渐变文字、光斑、网格背景、毛玻璃和大面积投影。
- 元数据一律用 12px 灰色纯文字。不把标签、日期、阅读时长套进徽章。
- 用标题文字本身来识别内容。标题前不放装饰图标，不放图标底块。
- 页面上只写内容本身。不写"本站由 AI 生成"或描述设计过程的话。
- 正文用衬线字体。不用系统无衬线字体当正文。

**无障碍下限。**

- 所有文字和背景的对比度至少 4.5:1，包括 12px 的元信息在代码块底色上。
- 所有可点元素都能用键盘到达，并有可见的焦点描边。
- 悬停只做增强。旁注、截断标题的全文都有不依赖悬停的入口。
- 遵守 `prefers-reduced-motion`，规则见 Motion 一节。

**验收。** 用 sweet-mode 附带的两个脚本检查。`ui-guardrails.js` 做静态扫描，`render-check.js` 在 375 和 1280 两个宽度下渲染检查。对比度、溢出和未登记的类名交给脚本，不靠人眼。
