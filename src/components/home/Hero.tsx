'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className={`${styles.hero} ${loaded ? styles.loaded : ''}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
