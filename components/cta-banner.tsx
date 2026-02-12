import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative rounded-[48px] bg-acid px-8 py-10 sm:px-12 sm:py-12 overflow-visible">
          {/* Left "5" artwork (user-provided image) */}
          <Image
            src="/New-Project-1.png"
            alt="LevelFive 5 mark"
            width={520}
            height={520}
            priority
            className="pointer-events-none absolute left-6 -bottom-10 h-[260px] w-auto rotate-[-10deg] select-none sm:left-8 sm:h-[340px]"
          />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="pl-0 sm:pl-[340px]">
              <h3 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                Klaar om te starten?
              </h3>
              <p className="mt-2 text-sm text-black/70">
                Plan direct een kennismaking of strategiecall
              </p>
            </div>

            <a
              href="#"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-black ring-1 ring-black/10"
            >
              Plan een kennismaking
              <span className="grid h-9 w-9 place-items-center rounded-full bg-acid ring-1 ring-black/10 transition group-hover:translate-x-[2px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path
                    d="M9 7h8v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
