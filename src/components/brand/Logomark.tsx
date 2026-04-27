interface LogomarkProps {
  size?: number;
  className?: string;
  title?: string;
}

export default function Logomark({ size = 24, className, title = "PassportCard" }: LogomarkProps) {
  return (
    <svg
      width={size}
      height={(size * 96) / 80}
      viewBox="0 0 80 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M40 2 L66 6 C73 7 78 11 78 18 V60 C78 78 62 90 40 95 C18 90 2 78 2 60 V18 C2 11 7 7 14 6 L40 2 Z M28 22 H50 C61 22 68 30 68 40 C68 50 61 58 50 58 H38 V74 H28 V22 Z M38 32 V48 H49 C54 48 58 44 58 40 C58 36 54 32 49 32 H38 Z"
      />
    </svg>
  );
}
