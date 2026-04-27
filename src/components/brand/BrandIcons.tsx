interface IconProps {
  size?: number;
  className?: string;
}

const baseProps = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  xmlns: "http://www.w3.org/2000/svg",
  className,
});

export function ShieldIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M12 2 L20 5 V11 C20 16 16.5 20 12 22 C7.5 20 4 16 4 11 V5 L12 2 Z" />
      <path d="M9 11 L11 13 L15.5 8.5" />
    </svg>
  );
}

export function CardIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <rect x="2" y="6" width="20" height="14" rx="2.5" />
      <line x1="2" y1="10.5" x2="22" y2="10.5" strokeWidth={2.4} />
      <circle cx="17" cy="16" r="1.6" fill="currentColor" />
      <circle cx="14.5" cy="16" r="1.6" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function ReceiptIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M5 3 H19 V21 L17 19.5 L15 21 L13 19.5 L11 21 L9 19.5 L7 21 L5 19.5 Z" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="13" y2="16" />
    </svg>
  );
}

export function SignalIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M12 18 L12 18.01" strokeWidth={2.5} />
      <path d="M8.5 14.5 C9.5 13.5 10.5 13 12 13 C13.5 13 14.5 13.5 15.5 14.5" />
      <path d="M5.5 11.5 C7 10 9.5 9 12 9 C14.5 9 17 10 18.5 11.5" />
      <path d="M2.5 8.5 C5 6 8.5 5 12 5 C15.5 5 19 6 21.5 8.5" />
    </svg>
  );
}

export function CheckIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <path d="M5 12 L10 17 L19 7" />
    </svg>
  );
}

export function UserPlusIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20 V19 a4 4 0 0 1 4 -4 h4 a4 4 0 0 1 4 4 V20" />
      <line x1="19" y1="7.5" x2="19" y2="13.5" />
      <line x1="16" y1="10.5" x2="22" y2="10.5" />
    </svg>
  );
}

export function CardsLinkIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      {/* Back card (top-right) */}
      <rect x="9" y="3" width="12.5" height="8.5" rx="1.5" />
      <line x1="9" y1="6.2" x2="21.5" y2="6.2" strokeWidth={1.5} />
      {/* Front card (bottom-left) */}
      <rect x="2.5" y="12.5" width="12.5" height="8.5" rx="1.5" />
      <line x1="2.5" y1="15.7" x2="15" y2="15.7" strokeWidth={1.5} />
    </svg>
  );
}

export function ZeroPercentIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...baseProps(size, className)}>
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="13"
        fontWeight="900"
        fill="currentColor"
        stroke="none"
        fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="-0.5"
      >
        0%
      </text>
    </svg>
  );
}

interface IconDiscProps {
  Icon: React.ComponentType<IconProps>;
  size?: number;
  iconSize?: number;
  className?: string;
}

export function IconDisc({ Icon, size = 44, iconSize, className }: IconDiscProps) {
  const inner = iconSize ?? Math.round(size * 0.52);
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #F23847 0%, #E10E18 60%, #C00913 100%)",
        boxShadow: "inset 0 1px 2px rgba(255,255,255,0.25), 0 4px 12px rgba(225,14,24,0.28)",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Icon size={inner} />
    </div>
  );
}
