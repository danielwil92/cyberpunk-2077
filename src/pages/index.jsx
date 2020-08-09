import React from 'react';
import '../scss/all.scss';
import Header from '../components/common/header/header';
import SectionWrapper from '../components/layout/wrapper/section-wrapper';
import Hero from '../content/hero/hero';
import HeroContent from '../data/content/home/hero.json';
import About from '../content/about/about';
import AboutContent from '../data/content/home/about.json';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SectionWrapper fullBleedSM>
          <Hero
            headline={HeroContent.headline}
            subheading={HeroContent.subheading}
            cta={HeroContent.cta}
            supportedPlatforms={HeroContent.supported_platforms}
          />
        </SectionWrapper>
        <SectionWrapper spacer={6}>
          <About
            headline={AboutContent.headline}
            body={AboutContent.body}
            pillars={AboutContent.pillars}
            cta={AboutContent.cta}
          />
        </SectionWrapper>
      </main>
    </div>
  );
}
