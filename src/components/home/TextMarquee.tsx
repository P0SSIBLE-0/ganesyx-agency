import React from 'react';
import styles from './TextMarquee.module.css';

const track1 = Array(8).fill('DIGITAL FIRST. RESULTS DRIVEN.');
const track2 = Array(8).fill('CREATIVE STRATEGY. POWERFUL GROWTH.');

const TextMarquee = () => {
  return (
    <section className={styles.section}>
      {/* Strip 1: Indigo/Blue background, rotating slanted downwards right (-2.5deg) */}
      <div className={styles.stripOne}>
        <div className={styles.scrollContainer}>
          <div className={styles.track}>
            {track1.map((text, index) => (
              <span key={index} className={styles.textItem}>
                {text} <span className={styles.dot}>•</span>
              </span>
            ))}
          </div>
          <div className={styles.track} aria-hidden="true">
            {track1.map((text, index) => (
              <span key={index} className={styles.textItem}>
                {text} <span className={styles.dot}>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Strip 2: Violet/Purple background, rotating slanted upwards right (1.5deg) */}
      <div className={styles.stripTwo}>
        <div className={styles.scrollContainer}>
          <div className={styles.trackReverse}>
            {track2.map((text, index) => (
              <span key={index} className={styles.textItem}>
                {text} <span className={styles.dot}>•</span>
              </span>
            ))}
          </div>
          <div className={styles.trackReverse} aria-hidden="true">
            {track2.map((text, index) => (
              <span key={index} className={styles.textItem}>
                {text} <span className={styles.dot}>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextMarquee;
