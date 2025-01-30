interface LogoProps {
  size: number;
}

export default function Logo({ size = 54 }: LogoProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd" // Changed from fill-rule to fillRule
        clipRule="evenodd" // Changed from clip-rule to clipRule
        d="M27.5005 17.9218L27.5 6.25H2.5V23.75L15.2588 23.7502C15.0866 23.14 14.9994 22.509 15 21.875C15 21.6644 15.0094 21.4563 15.028 21.2505L4.99996 21.25V10H25L25.0005 15.7499C25.9976 16.2604 26.8556 17.0058 27.5005 17.9218ZM4.99996 7.49998H8.74996V8.74996H4.99996V7.49998Z"
        fill="black"
      />
      <path
        d="M22.0171 17.3426L22.108 18.7449C22.1719 19.7309 22.2039 20.2239 22.3558 20.6893C22.5067 21.1554 22.7718 21.5743 23.3014 22.4124L24.0185 23.5486C25.3681 25.685 26.0429 26.7538 25.6014 27.6066L25.5943 27.6195C25.1458 28.4688 23.8687 28.5516 21.3157 28.7172C18.7626 28.8827 17.4856 28.9655 16.9306 28.1812L16.9224 28.1693C16.3745 27.3806 16.9057 26.2337 17.9681 23.9409L18.5326 22.7215C18.9501 21.8221 19.1577 21.3725 19.2477 20.8908C19.3377 20.4092 19.3058 19.9167 19.2419 18.9313L19.151 17.5284M19.4041 25.4435L19.4091 25.442M22.8617 26.3522L22.8667 26.3508M18.328 17.5817L22.8406 17.2892"
        stroke="black"
        strokeWidth="1.78571" // Changed from stroke-width to strokeWidth
        strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
        strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
      />
      <path
        d="M18.3954 22.9905C18.9173 22.3036 19.8502 22.7138 20.9616 23.2558C22.424 23.9688 23.2301 23.2968 23.4743 22.6947"
        stroke="black"
        strokeWidth="1.78571" // Changed from stroke-width to strokeWidth
        strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
        strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
      />
      <circle cx="20.3571" cy="12.5" r="1.07143" fill="black" />
      <circle cx="21.25" cy="15.1786" r="0.892857" fill="black" />
      <circle cx="18.6607" cy="14.1964" r="0.803571" fill="black" />
    </svg>
  );
}
