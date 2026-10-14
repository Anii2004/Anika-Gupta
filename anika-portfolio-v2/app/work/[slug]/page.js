import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return { title: `${c.title}: case study`, description: c.oneLiner };
}

function Chapter({ n, title, text, children }) {
  return (
    <section className="chapter">
      <div className="chap-head">
        <span className="chap-n">{n}</span>
        <div>
          <h2>{title}</h2>
          {text && <p className="lead">{text}</p>}
        </div>
      </div>
      {children && <div className="chap-body">{children}</div>}
    </section>
  );
}

function Points({ items }) {
  return (
    <div className="points">
      {items.map((x) => (
        <div key={x.h} className="point">
          <h3>{x.h}</h3>
          <p>{x.p}</p>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudy({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const others = caseStudies.filter((x) => x.slug !== c.slug);

  if (!c.ready) {
    return (
      <main className="wrap cs">
        <Link href="/#work" className="back">Back to work</Link>
        <h1 className="cs-title">{c.title}</h1>
        <p className="lead">This case study is being written up. Check back soon, or ask me about it.</p>
      </main>
    );
  }

  return (
    <main className="wrap cs">
      <Link href="/#work" className="back">Back to work</Link>

      <header className="cs-hero">
        <div className="glow glow-cs" aria-hidden="true" />
        <p className="pill static"><i />Case study</p>
        <h1 className="cs-title">{c.title}</h1>
        <p className="cs-sub">{c.hero}</p>
        <dl className="cs-meta">
          <div><dt>Role</dt><dd>{c.role}</dd></div>
          <div><dt>Year</dt><dd>{c.year}</dd></div>
          <div><dt>Focus</dt><dd>{c.tags.join(", ")}</dd></div>
        </dl>
        <div className="statrow">
          {c.stats.map((s) => (
            <div key={s.label} className="stat"><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>
      </header>

      <Chapter n="1" title={c.problem.title} text={c.problem.text}>
        <Points items={c.problem.points} />
      </Chapter>

      <Chapter n="2" title={c.research.title} text={c.research.text}>
        <div className="statrow">
          {c.research.stats.map((s) => (
            <div key={s.label} className="stat"><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </div>
        <p className="small">{c.research.note}</p>
      </Chapter>

      <Chapter n="3" title={c.insight.title}>
        <Points items={c.insight.points} />
        <blockquote className="quote">{c.insight.quote}</blockquote>
      </Chapter>

      <Chapter n="4" title={c.solution.title} text={c.solution.text}>
        <div className="map">
          <div className="map-row map-head"><span>What users told me</span><span /><span>What the product does</span></div>
          {c.solution.map.map(([pain, fix]) => (
            <div key={pain} className="map-row">
              <span className="muted">{pain}</span>
              <span className="arrow" aria-hidden="true" />
              <span className="fix">{fix}</span>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter n="5" title="Five decisions, each with a trade-off I chose.">
        <ol className="decisions">
          {c.decisions.map((d) => (
            <li key={d.h}><h3>{d.h}</h3><p>{d.p}</p></li>
          ))}
        </ol>
      </Chapter>

      <Chapter n="6" title={c.constraints.title} text={c.constraints.text}>
        <div className="tablewrap">
          <table className="access">
            <thead><tr><th>Platform</th><th>Access today</th><th>How it works with it</th></tr></thead>
            <tbody>
              {c.constraints.rows.map((r) => (
                <tr key={r.platform}>
                  <td><b>{r.platform}</b></td>
                  <td><span className={`pill ${r.tone}`}>{r.access}</span></td>
                  <td>{r.link ? <a href={r.link} target="_blank" rel="noopener">{r.how}</a> : r.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Chapter>

      <Chapter n="7" title={c.outcome.title}>
        <div className="ba">
          <div className="before">
            <h3>Before</h3>
            <dl>{c.outcome.before.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          </div>
          <div className="after">
            <h3>After</h3>
            <dl>{c.outcome.after.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          </div>
        </div>
        <p className="small">{c.outcome.note}</p>
      </Chapter>

      <Chapter n="8" title="What this taught me.">
        <Points items={c.learnings} />
      </Chapter>

      {others.length > 0 && (
        <nav className="more" aria-label="More case studies">
          <p className="more-label">Keep reading</p>
          {others.map((o) => (
            <Link key={o.slug} href={`/work/${o.slug}`}>
              {o.title}<span className="muted"> {o.ready ? o.oneLiner : "Coming soon"}</span>
            </Link>
          ))}
        </nav>
      )}
    </main>
  );
}
