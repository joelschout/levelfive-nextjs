import Image from "next/image";

type WorkItem = {
  title: string;
  category: string;
  image: string;
};

const WORK: WorkItem[] = [
  { title: "Solar Power", category: "Technology", image: "/work/gathered.png" },
  { title: "Privilee", category: "Lifestyle Membership", image: "/work/privilee.png" },
  { title: "Etihad Airways", category: "Aviation", image: "/work/etihad.png" },
  { title: "Bakkal", category: "Food & Beverage", image: "/work/bakkal.png" },
  { title: "TNRZ", category: "Branding", image: "/work/tnrz.png" },
];

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <div className="w-[360px] sm:w-[420px] lg:w-[520px] shrink-0">
      <div className="relative h-[230px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-3xl border border-black/10 bg-black/5">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 520px"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>
      <div className="mt-5">
        <div className="text-lg font-semibold text-black">{item.title}</div>
        <div className="mt-1 text-sm text-black/60">{item.category}</div>
      </div>
    </div>
  );
}

export default function WorkMarquee() {
  // Render 2x for seamless loop (animation moves -50%).
  const duplicated = [...WORK, ...WORK];

  return (
    <section className="bg-liquid py-14 sm:py-16">
      <div className="marquee">
        <div
          className="marquee-track gap-6 px-6"
          style={{ ["--marquee-duration" as any]: "60s" }}
        >
          {duplicated.map((item, i) => (
            <WorkCard key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
