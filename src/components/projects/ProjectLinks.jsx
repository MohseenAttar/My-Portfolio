import { ArrowUpRightIcon, GitHubIcon } from '../icons.jsx';

export default function ProjectLinks({ liveUrl, githubUrl }) {
  if (!liveUrl && !githubUrl) return null;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-[10px] border border-gold/60 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold-bright hover:text-bg"
        >
          Live demo
          <ArrowUpRightIcon />
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-secondary transition-colors hover:text-gold"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
          <ArrowUpRightIcon />
        </a>
      )}
    </div>
  );
}
