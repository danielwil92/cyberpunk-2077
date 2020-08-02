import React from 'react';
import '../scss/all.scss';
import Header from '../components/common/header/header';
import Hero from '../content/hero/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
