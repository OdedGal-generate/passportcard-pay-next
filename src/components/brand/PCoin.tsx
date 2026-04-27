import Logomark from "./Logomark";

interface PCoinProps {
  size?: number;
  className?: string;
}

export default function PCoin({ size = 48, className }: PCoinProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 25%, #F23847 0%, #E10E18 40%, #A0070F 100%)",
        boxShadow: `inset 0 ${size * 0.04}px ${size * 0.08}px rgba(255,255,255,0.25), inset 0 -${size * 0.04}px ${size * 0.08}px rgba(0,0,0,0.25), 0 ${size * 0.06}px ${size * 0.16}px rgba(225,14,24,0.35)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Logomark size={size * 0.55} className="text-white" title="" />
    </div>
  );
}
