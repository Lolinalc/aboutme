import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Marquee from '../components/Marquee';
import Process from '../components/Process';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services compact />
      <Marquee />
      <Process />
      <Contact />
    </>
  );
}
