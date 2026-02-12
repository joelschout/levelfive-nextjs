type Way = {
  num: string;
  title: string;
  desc: string;
};

function OutlineNumber({ value }: { value: string }) {
  return (
    <div
      className="outline-num select-none text-7xl font-extrabold leading-none tracking-tight text-acid sm:text-8xl"
      aria-hidden="true"
      data-way-num
    >
      {value}
    </div>
  );
}

export default function WaysToWork() {
  const ways: Way[] = [
    {
      num: "1",
      title: "Retainer",
      desc: "Steady access to our senior designers and strategists. Ideal for teams that want long-term support without the cost of hiring full-time.",
    },
    {
      num: "2",
      title: "Project Based",
      desc: "Defined scope, clear milestones, fast delivery. Best for launches, redesigns, or one-off initiatives.",
    },
    {
      num: "3",
      title: "Embedded Team",
      desc: "Our designers work directly in your workflow. Flexible, high-level support without permanent overhead.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
              WAYS TO WORK
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-black/70">
              Flexible collaborations built around your needs.
            </p>
          </div>

          <div className="space-y-12">
            {ways.map((w, idx) => (
              <div key={w.title}>
                <div className="flex items-start gap-8">
                  <OutlineNumber value={w.num} />
                  <div className="pt-2">
                    <h3 className="text-3xl font-semibold tracking-tight text-black">
                      {w.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/70">
                      {w.desc}
                    </p>
                  </div>
                </div>

                {idx !== ways.length - 1 && (
                  <div className="mt-10 h-px w-full bg-black/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
