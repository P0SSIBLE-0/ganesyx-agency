import styles from './BrandMarquee.module.css';

const brands = [
  { name: 'AminoChain', logo: '/brands/Frame 12.png' },
  { name: 'Simon', logo: '/brands/Frame 13.png' },
  { name: 'Antler', logo: '/brands/Frame 14.png' },
  { name: 'Front', logo: '/brands/Frame 15.png' },
  { name: 'Automox', logo: '/brands/Frame 16.png' },
  { name: 'Catalyst', logo: '/brands/Frame 18.png' },
  { name: 'Epochal', logo: '/brands/Frame 19.png' },
  { name: 'Whistic', logo: '/brands/Frame 20.png' },
  { name: 'Deepfactor', logo: '/brands/Frame 21.png' },
  { name: 'BOXD', logo: '/brands/Frame 22.png' },
  { name: 'Frate', logo: '/brands/Frame 23.png' },
  { name: 'Measured', logo: '/brands/rajendra_steel.png' },
  { name: 'Passthrough', logo: '/brands/Frame 26.png' },
  { name: 'Escala', logo: '/brands/sonatek_logo.png' },
];

const BrandMarquee = () => {
  const staticNames = ['Antler', 'Front', 'Automox', 'Catalyst', 'BOXD'];
  const staticBrands = brands.filter((brand) => staticNames.includes(brand.name));
  const marqueeBrands = brands.filter((brand) => !staticNames.includes(brand.name));

  const row1Brands = [...marqueeBrands, ...marqueeBrands, ...marqueeBrands];
  const row2Brands = [...marqueeBrands].reverse();
  const row2BrandsRepeated = [...row2Brands, ...row2Brands, ...row2Brands];

  return (
    <section className={styles.marquee}>
      <div className={styles.divider} />
      <div className={styles.container}>
        <p className={styles.label}>Trusted by Industry leaders</p>

        {/* Top Static Logos */}
        <div className={styles.staticContainer}>
          {staticBrands.map((brand, index) => (
            <div key={index} className={styles.staticLogoItem}>
              <img
                src={brand.logo}
                alt={brand.name}
                className={styles.brandLogo}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Marquee Rows */}
        <div className={styles.marqueeWrapper}>
          {/* Row 1: Scrolling Left */}
          <div className={styles.marqueeRow}>
            <div className={styles.marqueeTrack}>
              {marqueeBrands.map((brand, index) => (
                <div key={`row1-1-${index}`} className={styles.brandItem}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={styles.brandLogo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className={styles.marqueeTrack} aria-hidden="true">
              {marqueeBrands.map((brand, index) => (
                <div key={`row1-2-${index}`} className={styles.brandItem}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={styles.brandLogo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className={`${styles.marqueeRow} ${styles.marqueeRowReverse}`}>
            <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}>
              {row2Brands.map((brand, index) => (
                <div key={`row2-1-${index}`} className={styles.brandItem}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={styles.brandLogo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`} aria-hidden="true">
              {row2Brands.map((brand, index) => (
                <div key={`row2-2-${index}`} className={styles.brandItem}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={styles.brandLogo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </section>
  );
};

export default BrandMarquee;
