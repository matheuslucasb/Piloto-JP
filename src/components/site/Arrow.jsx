// A drawn right-arrow — 1px stroke, matching the hero scroll cue. Not a glyph.
export default function Arrow() {
  return (
    <svg
      className="site-arrow"
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M0 5h16M12 1l4 4-4 4" />
    </svg>
  )
}
