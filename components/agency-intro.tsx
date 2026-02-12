import ScrollRead from "@/components/scroll-read";

export default function AgencyIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        <ScrollRead
          className="max-w-4xl text-[28px] leading-[1.28] sm:text-[36px] sm:leading-[1.22] lg:text-[44px] lg:leading-[1.18]"
          text={`LevelFive is een content agency dat zich richt op het creëren van pakkende foto- en videocontent voor bedrijven en merken. Met een focus op snelheid, authenticiteit en social-first formats helpt Level Five ondernemers om zichtbaar te blijven met content die écht werkt, zonder gedoe, maar met resultaat.`}
        />
      </div>
    </section>
  );
}
