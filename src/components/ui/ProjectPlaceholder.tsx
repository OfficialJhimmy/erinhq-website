import clsx from "clsx";

export type ProjectIllustrationVariant = "kora" | "quill" | "atlas" | "generic";

export function illustrationVariantForId(id: string): ProjectIllustrationVariant {
  if (id === "kora" || id === "quill" || id === "atlas") return id;
  return "generic";
}

interface ProjectPlaceholderProps {
  variant?: ProjectIllustrationVariant;
  label?: string;
  className?: string;
}

// Used when a project has no real screenshot yet. Renders a small abstract
// line-art illustration only — never repeats the project title, since the
// parent card/hero already shows the title on top of this.
export function ProjectPlaceholder({ variant = "generic", label, className }: ProjectPlaceholderProps) {
  return (
    <div className={clsx("relative flex h-full w-full items-center justify-center bg-ink", className)}>
      <Illustration variant={variant} />
      {label && (
        <span className="absolute bottom-4 left-4 font-heading text-xs uppercase tracking-wider text-copper">
          {label}
        </span>
      )}
    </div>
  );
}

function Illustration({ variant }: { variant: ProjectIllustrationVariant }) {
  const stroke = "#E8B67E";
  const dim = "rgba(232,182,126,0.35)";

  if (variant === "kora") {
    // A document at the centre retrieving from connected knowledge nodes.
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32" fill="none" aria-hidden="true">
        <rect x="66" y="38" width="28" height="36" rx="3" stroke={stroke} strokeWidth="1.5" />
        <line x1="72" y1="47" x2="88" y2="47" stroke={stroke} strokeWidth="1.2" />
        <line x1="72" y1="54" x2="88" y2="54" stroke={stroke} strokeWidth="1.2" />
        <line x1="72" y1="61" x2="82" y2="61" stroke={stroke} strokeWidth="1.2" />
        <line x1="66" y1="52" x2="30" y2="30" stroke={dim} strokeWidth="1.2" />
        <line x1="66" y1="60" x2="26" y2="60" stroke={dim} strokeWidth="1.2" />
        <line x1="66" y1="68" x2="34" y2="90" stroke={dim} strokeWidth="1.2" />
        <line x1="94" y1="52" x2="130" y2="28" stroke={dim} strokeWidth="1.2" />
        <line x1="94" y1="68" x2="128" y2="88" stroke={dim} strokeWidth="1.2" />
        <circle cx="30" cy="30" r="4" stroke={stroke} strokeWidth="1.5" />
        <circle cx="26" cy="60" r="4" stroke={stroke} strokeWidth="1.5" />
        <circle cx="34" cy="90" r="4" stroke={stroke} strokeWidth="1.5" />
        <circle cx="130" cy="28" r="4" stroke={stroke} strokeWidth="1.5" />
        <circle cx="128" cy="88" r="4" stroke={stroke} strokeWidth="1.5" />
      </svg>
    );
  }

  if (variant === "quill") {
    // Notes flowing into a structured, formatted document.
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32" fill="none" aria-hidden="true">
        <rect x="18" y="30" width="40" height="28" rx="2" stroke={dim} strokeWidth="1.2" />
        <line x1="24" y1="38" x2="52" y2="38" stroke={dim} strokeWidth="1" />
        <line x1="24" y1="44" x2="46" y2="44" stroke={dim} strokeWidth="1" />
        <line x1="24" y1="50" x2="50" y2="50" stroke={dim} strokeWidth="1" />
        <path d="M60 44 L96 44" stroke={stroke} strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M90 40 L98 44 L90 48" stroke={stroke} strokeWidth="1.2" />
        <rect x="100" y="20" width="42" height="60" rx="3" stroke={stroke} strokeWidth="1.5" />
        <line x1="108" y1="32" x2="134" y2="32" stroke={stroke} strokeWidth="1.2" />
        <line x1="108" y1="40" x2="134" y2="40" stroke={stroke} strokeWidth="1.2" />
        <line x1="108" y1="48" x2="126" y2="48" stroke={stroke} strokeWidth="1.2" />
        <line x1="108" y1="58" x2="134" y2="58" stroke={dim} strokeWidth="1.2" />
        <line x1="108" y1="66" x2="120" y2="66" stroke={dim} strokeWidth="1.2" />
      </svg>
    );
  }

  if (variant === "atlas") {
    // A multi-agent constellation — several connected nodes, no single centre.
    return (
      <svg viewBox="0 0 160 120" className="h-24 w-32" fill="none" aria-hidden="true">
        <line x1="40" y1="30" x2="80" y2="55" stroke={dim} strokeWidth="1.2" />
        <line x1="80" y1="55" x2="125" y2="35" stroke={dim} strokeWidth="1.2" />
        <line x1="80" y1="55" x2="60" y2="90" stroke={dim} strokeWidth="1.2" />
        <line x1="80" y1="55" x2="118" y2="85" stroke={dim} strokeWidth="1.2" />
        <line x1="40" y1="30" x2="60" y2="90" stroke={dim} strokeWidth="1" />
        <line x1="125" y1="35" x2="118" y2="85" stroke={dim} strokeWidth="1" />
        <circle cx="80" cy="55" r="6" stroke={stroke} strokeWidth="1.5" />
        <circle cx="40" cy="30" r="4.5" stroke={stroke} strokeWidth="1.5" />
        <circle cx="125" cy="35" r="4.5" stroke={stroke} strokeWidth="1.5" />
        <circle cx="60" cy="90" r="4.5" stroke={stroke} strokeWidth="1.5" />
        <circle cx="118" cy="85" r="4.5" stroke={stroke} strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 120" className="h-24 w-32" fill="none" aria-hidden="true">
      <rect x="50" y="35" width="60" height="42" rx="4" stroke={stroke} strokeWidth="1.5" />
      <line x1="60" y1="47" x2="100" y2="47" stroke={stroke} strokeWidth="1.2" />
      <line x1="60" y1="56" x2="90" y2="56" stroke={dim} strokeWidth="1.2" />
      <line x1="60" y1="65" x2="96" y2="65" stroke={dim} strokeWidth="1.2" />
    </svg>
  );
}
