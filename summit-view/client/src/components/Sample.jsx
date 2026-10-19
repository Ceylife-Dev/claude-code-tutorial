// Dev-only reminder that a piece of content is placeholder copy. Never renders in production builds.
export default function Sample() {
  if (!import.meta.env.DEV) return null;
  return <span className="sample-tag" title="Placeholder content: edit src/content.js">sample</span>;
}
