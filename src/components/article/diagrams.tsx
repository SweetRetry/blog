import type { ReactNode } from "react"

const serif = "var(--font-serif)"
const mono = "var(--font-mono)"

function ArrowMarker({ id, color }: { id: string; color: string }) {
  return (
    <marker
      id={id}
      viewBox="0 0 8 8"
      refX="7"
      refY="4"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path
        d="M 1 1.5 L 7 4 L 1 6.5"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
      />
    </marker>
  )
}

function AsleepTimeline() {
  const pulses = [
    { x: 112, w: 12, label: "04:30 整理与复盘", pos: "top", accent: false },
    { x: 200, w: 10, label: "08:00 定时简报", pos: "bottom", accent: false },
    { x: 350, w: 8, label: "14:00 对话追问", pos: "top", accent: false },
    { x: 488, w: 8, label: "19:30 事件唤醒", pos: "bottom", accent: true },
  ] as const

  const ticks = [
    { x: 0, text: "00:00", anchor: "start" },
    { x: 150, text: "06:00", anchor: "middle" },
    { x: 300, text: "12:00", anchor: "middle" },
    { x: 450, text: "18:00", anchor: "middle" },
    { x: 600, text: "24:00", anchor: "end" },
  ] as const

  return (
    <svg
      viewBox="0 0 600 152"
      role="img"
      aria-label="常驻 agent 一天 24 小时的运行节律，绝大多数时间休眠，只在事件或定时触发时短暂唤醒"
      className="block h-auto w-full min-w-[460px]"
    >
      <title>常驻 agent 一天的运行节律</title>

      <rect
        x="0"
        y="4"
        width="16"
        height="8"
        rx="2"
        fill="var(--muted)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <text
        x="24"
        y="12"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        休眠（绝大多数时间）
      </text>

      <rect
        x="498"
        y="2"
        width="6"
        height="12"
        rx="1.5"
        fill="var(--foreground)"
      />
      <text
        x="512"
        y="12"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        短暂唤醒执行
      </text>

      <rect
        x="0"
        y="66"
        width="600"
        height="14"
        rx="2"
        fill="var(--muted)"
        stroke="var(--border)"
        strokeWidth="1"
      />

      {pulses.map((p) => {
        const cx = p.x + p.w / 2
        const fill = p.accent ? "var(--brand)" : "var(--foreground)"
        return (
          <g key={p.label}>
            <rect x={p.x} y="54" width={p.w} height="38" rx="2" fill={fill} />
            <text
              x={cx}
              y={p.pos === "top" ? 42 : 112}
              textAnchor="middle"
              fill={p.accent ? "var(--brand)" : "var(--foreground)"}
              fontFamily={serif}
              fontSize="12"
            >
              {p.label}
            </text>
          </g>
        )
      })}

      <line
        x1="0"
        y1="130"
        x2="600"
        y2="130"
        stroke="var(--border)"
        strokeWidth="1"
      />
      {ticks.map((t) => (
        <text
          key={t.text}
          x={t.x}
          y="146"
          textAnchor={t.anchor}
          fill="var(--muted-foreground)"
          fontFamily={mono}
          fontSize="11"
        >
          {t.text}
        </text>
      ))}
    </svg>
  )
}

function BookmarkHandoff() {
  const tiles = [
    { id: "#1", x: 0 },
    { id: "#2", x: 104 },
    { id: "#3", x: 208 },
    { id: "#4", x: 312 },
    { id: "#5", x: 416 },
    { id: "#6", x: 520 },
  ] as const

  return (
    <svg
      viewBox="0 0 600 260"
      role="img"
      aria-label="对比固定时间窗口和共享书签：时间窗口容易在延迟时漏掉消息，共享书签由定时和对话共用，且只在消息送达后才往前推进"
      className="block h-auto w-full min-w-[460px]"
    >
      <title>固定时间窗口与共享书签对比</title>
      <defs>
        <ArrowMarker id="bh-arrow-brand" color="var(--brand)" />
      </defs>

      <text
        x="0"
        y="14"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        固定时间窗口（按时钟切分，延迟会漏读）
      </text>

      {tiles.map((t) => {
        const missed = t.id === "#3"
        return (
          <g key={`top-${t.id}`}>
            <rect
              x={t.x}
              y="26"
              width="80"
              height="28"
              rx="4"
              fill={missed ? "var(--background)" : "var(--muted)"}
              stroke={missed ? "var(--brand)" : "var(--border)"}
              strokeWidth="1"
              strokeDasharray={missed ? "3 3" : undefined}
            />
            <text
              x={t.x + 40}
              y="44"
              textAnchor="middle"
              fill={missed ? "var(--brand)" : "var(--foreground)"}
              fontFamily={mono}
              fontSize="12"
            >
              {t.id}
            </text>
          </g>
        )
      })}

      <path
        d="M 1 62 V 68 H 183 V 62"
        fill="none"
        stroke="var(--muted-foreground)"
        strokeWidth="1"
      />
      <text
        x="92"
        y="84"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        08:00 扫过去 24h
      </text>

      <text
        x="248"
        y="84"
        textAnchor="middle"
        fill="var(--brand)"
        fontFamily={serif}
        fontSize="12"
      >
        延迟导致漏读
      </text>

      <path
        d="M 313 62 V 68 H 599 V 62"
        fill="none"
        stroke="var(--muted-foreground)"
        strokeWidth="1"
      />
      <text
        x="456"
        y="84"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        下次按时钟扫描
      </text>

      <line
        x1="0"
        y1="106"
        x2="600"
        y2="106"
        stroke="var(--border)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />

      <text
        x="0"
        y="128"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
        fontWeight="600"
      >
        共享书签（按进度切分，送达后才更新）
      </text>

      {tiles.map((t, idx) => {
        const failed = idx >= 4
        return (
          <g key={`bot-${t.id}`}>
            <rect
              x={t.x}
              y="142"
              width="80"
              height="28"
              rx="4"
              fill={failed ? "var(--background)" : "var(--muted)"}
              stroke={failed ? "var(--brand)" : "var(--border)"}
              strokeWidth="1"
              strokeDasharray={failed ? "3 3" : undefined}
            />
            <text
              x={t.x + 40}
              y="160"
              textAnchor="middle"
              fill={failed ? "var(--brand)" : "var(--foreground)"}
              fontFamily={mono}
              fontSize="12"
            >
              {t.id}
            </text>
          </g>
        )
      })}

      <line
        x1="404"
        y1="136"
        x2="404"
        y2="180"
        stroke="var(--foreground)"
        strokeWidth="1.5"
      />
      <circle cx="404" cy="136" r="3" fill="var(--foreground)" />

      <path
        d="M 1 178 V 184 H 183 V 178"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="1"
      />
      <text
        x="92"
        y="200"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        08:00 定时送达 → 推进至 #2
      </text>

      <path
        d="M 209 178 V 184 H 391 V 178"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="1"
      />
      <text
        x="300"
        y="200"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        14:00 对话送达 → 推进至 #4
      </text>

      <path
        d="M 417 178 V 184 H 599 V 178"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <text
        x="508"
        y="200"
        textAnchor="middle"
        fill="var(--brand)"
        fontFamily={serif}
        fontSize="12"
      >
        18:00 发送失败 → 书签不变
      </text>

      <path
        d="M 508 210 V 230 H 404 V 188"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1"
        strokeDasharray="3 3"
        markerEnd="url(#bh-arrow-brand)"
      />
      <text
        x="456"
        y="248"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        书签留在 #4，下次从 #5 重读
      </text>
    </svg>
  )
}

function MaintenanceSplit() {
  return (
    <svg
      viewBox="0 0 600 184"
      role="img"
      aria-label="记忆整理和定时复盘分开运行，分别由版本回退和人工审阅兜底"
      className="block h-auto w-full min-w-[460px]"
    >
      <title>记忆整理与定时复盘</title>
      <defs>
        <ArrowMarker id="ms-arrow-muted" color="var(--muted-foreground)" />
        <ArrowMarker id="ms-arrow-brand" color="var(--brand)" />
      </defs>

      {/* Lane 1: Memory */}
      <text
        x="0"
        y="34"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="13"
        fontWeight="600"
      >
        整理记忆
      </text>
      <text
        x="0"
        y="52"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="11"
      >
        事实与偏好
      </text>

      <rect
        x="82"
        y="16"
        width="142"
        height="48"
        rx="4"
        fill="var(--muted)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <text
        x="153"
        y="44"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        日常对话沉淀
      </text>

      <line
        x1="224"
        y1="40"
        x2="250"
        y2="40"
        stroke="var(--muted-foreground)"
        strokeWidth="1"
        markerEnd="url(#ms-arrow-muted)"
      />

      <rect
        x="256"
        y="16"
        width="150"
        height="48"
        rx="4"
        fill="var(--background)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <text
        x="331"
        y="44"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        定期合并 · 清理过期
      </text>

      <line
        x1="406"
        y1="40"
        x2="432"
        y2="40"
        stroke="var(--muted-foreground)"
        strokeWidth="1"
        markerEnd="url(#ms-arrow-muted)"
      />

      <rect
        x="438"
        y="16"
        width="162"
        height="48"
        rx="4"
        fill="var(--background)"
        stroke="var(--foreground)"
        strokeWidth="1"
      />
      <text
        x="519"
        y="36"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        版本记录
      </text>
      <text
        x="519"
        y="53"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="11"
      >
        有误可直接回退
      </text>

      {/* Lane 2: Retro */}
      <text
        x="0"
        y="114"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="13"
        fontWeight="600"
      >
        定时复盘
      </text>
      <text
        x="0"
        y="132"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="11"
      >
        规则与工具
      </text>

      <rect
        x="82"
        y="96"
        width="142"
        height="48"
        rx="4"
        fill="var(--muted)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <text
        x="153"
        y="116"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        会话摘要
      </text>
      <text
        x="153"
        y="133"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="11"
      >
        纠正 · 慢步 · 报错
      </text>

      <line
        x1="224"
        y1="120"
        x2="250"
        y2="120"
        stroke="var(--muted-foreground)"
        strokeWidth="1"
        markerEnd="url(#ms-arrow-muted)"
      />

      <rect
        x="256"
        y="96"
        width="150"
        height="48"
        rx="4"
        fill="var(--background)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <text
        x="331"
        y="116"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily={serif}
        fontSize="12"
      >
        排查根因 · 起草改动
      </text>
      <text
        x="331"
        y="133"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="11"
      >
        证据不足则不改动
      </text>

      <line
        x1="406"
        y1="120"
        x2="432"
        y2="120"
        stroke="var(--brand)"
        strokeWidth="1"
        markerEnd="url(#ms-arrow-brand)"
      />

      <rect
        x="438"
        y="96"
        width="162"
        height="48"
        rx="4"
        fill="var(--background)"
        stroke="var(--brand)"
        strokeWidth="1"
      />
      <text
        x="519"
        y="116"
        textAnchor="middle"
        fill="var(--brand)"
        fontFamily={serif}
        fontSize="12"
      >
        待审变更
      </text>
      <text
        x="519"
        y="133"
        textAnchor="middle"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="11"
      >
        人工审阅后合并
      </text>

      <text
        x="82"
        y="174"
        fill="var(--muted-foreground)"
        fontFamily={serif}
        fontSize="11"
      >
        自动化负责发现问题和起草方案，最终生效权始终留在人手里。
      </text>
    </svg>
  )
}

export const diagrams = {
  "asleep-timeline": AsleepTimeline,
  "bookmark-handoff": BookmarkHandoff,
  "maintenance-split": MaintenanceSplit,
} satisfies Record<string, () => ReactNode>

export type DiagramId = keyof typeof diagrams
