"use client";

import Image from "next/image";

// Drop your client logos in: /public/logos/clients/
// These filenames match the ones in your screenshot.
const LOGOS = [
  "1-300x171.png",
  "67c588f7b2c8ed868b48d18e_holydinner-boredeaux-300x176.png",
  "333-300x193-1.png",
  "a0e9e040-d42c-4b9f-a77e-f16b340a95d3-300x188-1.png",
  "Brisa-gold-green.png-2-300x119.webp",
  "images-5-300x125-1.png",
  "Katoenlogozwart-300x90.png",
  "Logo_goesisGOES_MAGENTA_whiteOutline-300x300-2.png",
  "Logo_transparant-768x364-4-300x142.png",
  "logo-3-300x64.png",
  "SMWO-zonder-tekst-300x96-1.jpg",
  "virgin-records-logo-3-300x201.png",
  "Zeelandia-Display-Landscape-Logo-2-300x75.png",
];

function LogoItem({ file }: { file: string }) {
  const src = `/logos/clients/${file}`;
  const alt = file.replace(/[-_]/g, " ").replace(/\.(png|jpe?g|webp)$/i, "");
  return (
    <div className="flex h-12 items-center px-8">
      <Image
        src={src}
        alt={alt}
        width={220}
        height={80}
        className="h-10 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
        unoptimized
      />
    </div>
  );
}

export default function ClientLogoMarquee() {
  // duplicate for seamless loop
  const items = [...LOGOS, ...LOGOS];

  return (
    <div className="border-t border-black/10 bg-white w-full">
      <div className="py-10 logo-marquee">
        <div
          className="marquee"
          style={{ ["--marquee-duration" as any]: "40s" }}
        >
          <div className="marquee-track">
            {items.map((file, i) => (
              <LogoItem key={`${file}-${i}`} file={file} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
