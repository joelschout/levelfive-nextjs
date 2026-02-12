import Image from "next/image";

function SocialIcon({ type }: { type: "in" | "ig" | "x" | "dr" | "be" }) {
  const common = "h-4 w-4";
  switch (type) {
    case "in":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
          <path d="M20.447 20.452H16.9v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.364V9h3.4v1.561h.048c.474-.9 1.633-1.85 3.358-1.85 3.59 0 4.255 2.364 4.255 5.443v6.298zM5.337 7.433a1.98 1.98 0 1 1 0-3.96 1.98 1.98 0 0 1 0 3.96zM6.9 20.452H3.773V9H6.9v11.452z" />
        </svg>
      );
    case "ig":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M17.5 6.5h.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
          <path d="M18.9 2H22l-6.78 7.75L23 22h-6.7l-5.24-6.77L4.9 22H2l7.3-8.35L1.6 2h6.86l4.73 6.2L18.9 2Zm-1.17 18h1.72L7.45 3.87H5.6L17.73 20Z" />
        </svg>
      );
    case "dr":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
          <path
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2 12h20" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2a16 16 0 0 1 6 10 16 16 0 0 1-6 10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 2a16 16 0 0 0-6 10 16 16 0 0 0 6 10"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "be":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden>
          <path d="M22 12.2c0 5.5-4.5 9.8-10 9.8S2 17.7 2 12.2C2 6.7 6.5 2.4 12 2.4s10 4.3 10 9.8Zm-15.3 0c0 3.2 2.6 5.8 5.8 5.8 2.6 0 4.8-1.7 5.5-4.1-1.5.6-3.5.3-4.8-.8-1.6-1.3-1.8-3.3-1.5-4.7-2.8.4-5 2.8-5 5.6Z" />
        </svg>
      );
  }
}

export default function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.9fr_.9fr]">
          {/* Left */}
          <div>
            <a href="#" className="inline-flex items-center">
              <Image
                src="/LevelFive-LogoFile-Black.png"
                alt="LevelFive"
                width={190}
                height={48}
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-black/60">
              LevelFive is a premium UX/UI, product, and branding studio building
              bold, strategic, and conversion-driven digital experiences.
            </p>

            <div className="mt-16 flex items-center gap-10 text-sm text-black/55">
              <a className="hover:text-black" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-black" href="#">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Middle links */}
          <div className="grid grid-cols-2 gap-10">
            <nav className="space-y-3 text-sm">
              <a className="block text-black/70 hover:text-black" href="#">
                Case Studies
              </a>
              <a className="block text-black/70 hover:text-black" href="#">
                Services
              </a>
              <a className="block text-black/70 hover:text-black" href="#">
                About
              </a>
              <a className="block text-black/70 hover:text-black" href="#">
                Contact Us
              </a>
            </nav>

            <nav className="space-y-3 text-sm">
              <a className="block text-black/70 hover:text-black" href="#">
                Blog
              </a>
              <a className="block text-black/70 hover:text-black" href="#">
                Careers
              </a>
              <a className="block text-black/70 hover:text-black" href="#">
                FAQs
              </a>
            </nav>
          </div>

          {/* Right */}
          <div>
            <div className="flex items-center justify-start gap-3 lg:justify-end">
              {([
                "in",
                "ig",
                "x",
                "dr",
                "be",
              ] as const).map((t) => (
                <a
                  key={t}
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/15 text-black/70 transition hover:text-black hover:ring-white/25"
                  aria-label={t}
                >
                  <SocialIcon type={t} />
                </a>
              ))}
            </div>

            <div className="mt-10 lg:text-right">
              <div className="text-base font-semibold text-black/90">
                hello@levelfive.com
              </div>
              <div className="mt-6 text-sm leading-relaxed text-black/55">
                Meydan Grandstand, 6th floor,
                <br />
                Dubai, United Arab Emirates
              </div>

              <div className="mt-12 text-sm text-black/45">
                Copyright © 2026 LevelFive
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
