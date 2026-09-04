import { historyLede, historyMarks, historyParagraphs } from '../../data/siteContent.js'

export default function HistorySection() {
  return (
    <>
      <div className="site-split-main">
        <p className="site-lede site-lede-lg">{historyLede}</p>
        <div className="site-prose">
          {historyParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <aside className="site-split-aside">
        <dl className="site-marks site-marks-stacked">
          {historyMarks.map((m) => (
            <div className="site-mark" key={m.k}>
              <dt>{m.k}</dt>
              <dd>{m.v}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </>
  )
}
