export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="12" fill="url(#logo-grad)" />
      <path
        d="M24 8L26.5 12.5L31 11L30.5 15.5L35 15.5L33 19.5L37 22L33.5 24.5L37 27L33 29.5L35 33.5L30.5 33.5L31 38L26.5 36.5L24 41L21.5 36.5L17 38L17.5 33.5L13 33.5L15 29.5L11 27L14.5 24.5L11 22L15 19.5L13 15.5L17.5 15.5L17 11L21.5 12.5L24 8Z"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="24" r="12" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2" />
      <path
        d="M20 24H28M24 20V28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#f97316" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="12" fill="url(#logo-grad-full)" />
      <circle cx="24" cy="24" r="12" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2" />
      <path
        d="M20 24H28M24 20V28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text
        x="60"
        y="30"
        fill="white"
        fontFamily="'Bebas Neue', 'Impact', sans-serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="2"
      >
        AXLE MOTORS
      </text>
      <text
        x="60"
        y="42"
        fill="#f97316"
        fontFamily="'Inter', sans-serif"
        fontSize="8"
        fontWeight="600"
        letterSpacing="2.5"
      >
        DIESEL &amp; AUTO REPAIR
      </text>
      <defs>
        <linearGradient id="logo-grad-full" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#f97316" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );
}
