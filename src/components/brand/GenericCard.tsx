interface GenericCardProps {
  width?: number;
  className?: string;
}

export default function GenericCard({ width = 140, className }: GenericCardProps) {
  const height = width / 1.586;
  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: width * 0.06,
        background: "linear-gradient(135deg, #cbd5e1 0%, #94a3b8 60%, #64748b 100%)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(15,23,42,0.18)",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(115deg, rgba(255,255,255,0.25) 0%, transparent 40%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: width * 0.12,
          left: width * 0.08,
          width: width * 0.13,
          height: width * 0.10,
          borderRadius: width * 0.012,
          background: "linear-gradient(135deg, #d4af37 0%, #b8962e 60%, #8a6f1f 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: width * 0.08,
          right: width * 0.08,
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
            opacity: 0.95,
          }}
        />
        <span
          style={{
            width: width * 0.10,
            height: width * 0.10,
            borderRadius: "50%",
            background: "#F79E1B",
            opacity: 0.95,
            marginLeft: -width * 0.04,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: width * 0.16,
          right: width * 0.08,
          fontSize: width * 0.05,
          color: "rgba(255,255,255,0.6)",
          fontWeight: 600,
          letterSpacing: "0.02em",
        }}
      >
        BANK
      </div>
    </div>
  );
}
