import HeaderHero from "@/components/header-hero";
import ClientLogoMarquee from "@/components/client-logo-marquee";
import AgencyIntro from "@/components/agency-intro";
import RecentWork from "@/components/recent-work";
import WhatWeOffer from "@/components/what-we-offer";
import VideoMarquee from "@/components/video-marquee";
import WhyChoose from "@/components/why-choose";
import WaysToWork from "@/components/ways-to-work";
import Testimonials from "@/components/testimonials";
import YouAskWeAnswer from "@/components/you-ask";
import CtaBanner from "@/components/cta-banner";
import SiteFooter from "@/components/site-footer";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HeaderHero />
      <ClientLogoMarquee />
      <AgencyIntro />
      <RecentWork />
      <WhatWeOffer />
      <VideoMarquee />
      <WhyChoose />
      <WaysToWork />
      <Testimonials />
      <YouAskWeAnswer />
      <CtaBanner />
      <SiteFooter />
    </main>
  );
}
