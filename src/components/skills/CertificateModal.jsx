import { useEffect, useRef } from 'react';
import { ArrowUpRightIcon, CloseIcon } from '../icons.jsx';

// Native <dialog>: the browser handles the focus trap, Esc and the inert background.
export default function CertificateModal({ activity, onClose }) {
  const dialogRef = useRef(null);
  const { title, organizer, date, certificate, Icon } = activity;
  const titleId = `certificate-title-${activity.id}`;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const close = () => dialogRef.current.close();

  // Clicks on the backdrop target the <dialog> itself; clicks inside land on the wrapper.
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleBackdropClick}
      className="m-auto w-[min(96vw,64rem)] max-w-none overflow-hidden rounded-2xl bg-transparent p-0 text-ink backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="fade-in flex max-h-[92vh] flex-col rounded-2xl border border-gold/30 bg-surface">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
          <div className="flex min-w-0 items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 id={titleId} className="text-lg font-semibold text-ink sm:text-xl">
                {title}
              </h3>
              <p className="text-xs text-ink-secondary sm:text-sm">
                {organizer}, {date}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close certificate"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-ink-secondary transition-colors hover:border-gold/50 hover:text-gold"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="overflow-auto p-3 sm:p-5">
          <img
            src={certificate.src}
            alt={certificate.alt}
            className="mx-auto h-auto w-full rounded-lg"
          />
        </div>

        <div className="border-t border-white/10 p-4 text-center sm:p-5">
          <a
            href={certificate.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-gold/60 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold-bright hover:text-bg"
          >
            Open full size in new tab
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </dialog>
  );
}
