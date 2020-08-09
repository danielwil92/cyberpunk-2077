import React from 'react';
import '../scss/all.scss';
import Header from '../components/common/header/header';
import Hero from '../content/hero/hero';
import HeroContent from '../data/content/home/hero.json';
import About from '../content/about/about';
import AboutContent from '../data/content/home/about.json';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="wrapper wrapper--full-bleed-sm">
          <Hero
            headline={HeroContent.headline}
            subheading={HeroContent.subheading}
            cta={HeroContent.cta}
            supportedPlatforms={HeroContent.supported_platforms}
          />
        </section>
        <section className="wrapper mod-spacer-6">
          <About
            headline={AboutContent.headline}
            body={AboutContent.body}
          />
        </section>
      </main>
    </div>
  );
}
