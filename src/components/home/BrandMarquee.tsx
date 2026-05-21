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
  { name: 'Measured', logo: '/brands/Frame 25.png' },
  { name: 'Passthrough', logo: '/brands/Frame 26.png' },
  { name: 'Escala', logo: '/brands/logo (1).webp' },
];

const BrandMarquee = () => {
  return (
    <section className={styles.marquee}>
      <div className={styles.divider} />
      <div className={styles.container}>
        <p className={styles.label}>Trusted by Industry leaders</p>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className={styles.brandItem}>
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
      <div className={styles.divider} />
    </section>
  );
};

export default BrandMarquee;
