import Logomark from "./Logomark";

interface BrandCardProps {
  width?: number;
  className?: string;
  tilt?: boolean;
}

export default function BrandCard({ width = 140, className, tilt = false }: BrandCardProps) {
  const height = width / 1.586;
  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: width * 0.06,
        background:
          "linear-gradient(135deg, #F23847 0%, #E10E18 50%, #BF1732 100%)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.10), 0 8px 24px rgba(225,14,24,0.30), 0 24px 56px rgba(225,14,24,0.18)",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        transform: tilt ? "rotate(-6deg)" : undefined,
      }}
    >
      {/* gloss highlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(115deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.04) 35%, transparent 60%)",
        }}
      />
      {/* business label */}
      <div
        style={{
          position: "absolute",
          top: width * 0.05,
          left: width * 0.08,
          fontSize: width * 0.038,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "0.04em",
        }}
      >
        business
      </div>
      {/* PassportCard wordmark */}
      <div
        style={{
          position: "absolute",
          top: width * 0.07,
          right: width * 0.08,
          fontSize: width * 0.062,
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.01em",
        }}
      >
        PassportCard
      </div>
      {/* contactless arc */}
      <div
        style={{
          position: "absolute",
          top: width * 0.18,
          right: width * 0.08,
          color: "rgba(255,255,255,0.85)",
          fontSize: width * 0.07,
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        ))
      </div>
      {/* gold EMV chip */}
      <div
        style={{
          position: "absolute",
          top: width * 0.2,
          left: width * 0.08,
          width: width * 0.13,
          height: width * 0.10,
          borderRadius: width * 0.012,
          background: "linear-gradient(135deg, #f7d77b 0%, #d4af37 50%, #8a6f1f 100%)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.4)",
        }}
      />
      {/* shield+p logomark — center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          opacity: 0.95,
        }}
      >
        <Logomark size={height * 0.55} />
      </div>
      {/* mastercard logo */}
      <div
        style={{
          position: "absolute",
          bottom: width * 0.06,
          right: width * 0.07,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: width * 0.10,
            height: width * 0.10,
            borderRadius: "50%",
            background: "#EB001B",
          }}
        />
        <span
          style={{
            width: width * 0.10,
            height: width * 0.10,
            borderRadius: "50%",
            background: "#F79E1B",
            marginLeft: -width * 0.04,
            mixBlendMode: "screen",
          }}
        />
      </div>
      {/* embossed number */}
      <div
        style={{
          position: "absolute",
          bottom: width * 0.21,
          left: width * 0.08,
          fontSize: width * 0.048,
          color: "rgba(255,255,255,0.85)",
          letterSpacing: "0.08em",
          fontWeight: 600,
          fontFamily: "ui-monospace, monospace",
        }}
      >
        5412 •••• •••• 0000
      </div>
    </div>
  );
}
