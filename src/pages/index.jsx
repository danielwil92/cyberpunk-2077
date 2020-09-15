import React from 'react';
import '../scss/all.scss';
import Header from '../components/common/header/header';
import Footer from '../components/common/footer/footer';
import SectionWrapper from '../components/layout/wrapper/section-wrapper';
import Hero from '../content/hero/hero';
import HeroContent from '../data/content/home/hero.json';
import About from '../content/about/about';
import AboutContent from '../data/content/home/about.json';
import NightCityWire from '../content/night-city-wire/night-city-wire';
import NightCityWireContent from '../data/content/home/night-city-wire.json';
import Store from '../content/store/store';
import StoreContent from '../data/content/home/store.json';

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
        <SectionWrapper fullBleed spacer={6}>
          <NightCityWire
            headIntro={NightCityWireContent.head_intro}
            episode={NightCityWireContent.episode}
            cta={NightCityWireContent.cta}
          />
        </SectionWrapper>
        <SectionWrapper spacer={6}>
          <Store
            headIntro={StoreContent.head_intro}
            items={StoreContent.items}
            cta={StoreContent.cta}
          />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
