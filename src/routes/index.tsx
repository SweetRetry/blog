import { Link, createFileRoute } from "@tanstack/react-router"
import { Page } from "@/components/page"
import { formatListDate, postsByYear, site } from "@/content"

export const Route = createFileRoute("/")({ component: Home })

function Home() {
  const years = postsByYear()
  return (
    <Page>
      <header className="mb-16 text-lg">
        <Link to="/" className="font-semibold">
          SweetRetry
        </Link>
        <p className="text-muted-foreground">Frontend Engineer</p>
      </header>
      <p className="mb-16 text-xl">{site.intro}</p>
      {years.length === 0 ? (
        <p className="mb-10 text-lg text-muted-foreground">
          这里还没有文章。第一篇在写了。
        </p>
      ) : (
        years.map(([year, posts]) => (
          <section key={year} className="mb-10">
            <h2 className="mb-2 text-xs text-muted-foreground lining-nums tabular-nums">
              {year}
            </h2>
            <ul>
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/posts/$slug"
                    params={{ slug: p.slug }}
                    className="flex items-baseline justify-between gap-6 py-1.5"
                  >
                    <span className="link-draw text-lg leading-relaxed text-balance">
                      {p.title}
                    </span>
                    <time
                      dateTime={p.date}
                      className="shrink-0 text-xs text-muted-foreground lining-nums tabular-nums"
                    >
                      {formatListDate(p.date)}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </Page>
  )
}
