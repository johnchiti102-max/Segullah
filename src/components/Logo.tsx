const Logo = ({ size = 48 }: { size?: number }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#0033AA" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="30" r="20" fill="#FF00FF" />
      <circle cx="180" cy="70" r="16" fill="#FFFF00" />
      <circle cx="160" cy="120" r="22" fill="#00FF00" />
      <circle cx="30" cy="160" r="18" fill="#FF0000" />

      <path
        d="M 80 40 Q 100 60 100 100 Q 100 140 80 160"
        fill="none"
        stroke="url(#sGradient)"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M 120 40 Q 140 60 140 100 Q 140 140 120 160"
        fill="none"
        stroke="url(#sGradient)"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
