'use client';

import { motion } from 'framer-motion';
import Carousel from '@/components/ui/Carousel';
import styles from './BrandingGallery.module.css';
import { Badge, Heading, Paragraph } from '../ui/Typography';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

const items: GalleryItem[] = [
  {
    id: '01',
    image: 'https://images.unsplash.com/photo-1627211448661-0ff9872180db?q=80&w=1170&auto=format',
    title: 'LifeRise Health',
    subtitle: 'Brand Collateral & Stationery System',
  },
  {
    id: '02',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&auto=format&fit=crop&q=85',
    title: 'Azoth Systems',
    subtitle: 'Corporate Brand Guidelines & Editorial Book',
  },
  {
    id: '03',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1200&auto=format&fit=crop&q=85',
    title: 'Azoth Merchandise',
    subtitle: 'Custom Branded Apparel & Swag',
  },
  {
    id: '04',
    image: 'https://images.unsplash.com/photo-1654481414716-2f4ab5fe0fbe?q=80&w=1332&auto=format&fit=crop',
    title: 'Azoth Merchandise',
    subtitle: 'Custom Branded Apparel & Swag',
  },
];

export default function BrandingGallery() {
  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge>BRAND GALLERY</Badge>
          <Heading>
            <span >Identity in</span>
            <span className={styles.headingItalic}> Action</span>
          </Heading>
          <Paragraph>
            Explore our curated collections of visual collateral, package designs, and brand systems.
          </Paragraph>
        </motion.div>

        {/* Carousel Component Wrapper */}
        <motion.div
          className={styles.carouselContainer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <Carousel
            showArrows={true}
            showProgress={true}
            className={styles.galleryCarousel}
            trackClassName={styles.galleryTrack}
          >
            {items.map((item) => (
              <div key={item.id} className={styles.galleryCard}>
                <div className={styles.imageWrapper}>
                  <div
                    className={styles.cardImage}
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className={styles.overlay} />
                </div>

                {/* Meta details */}
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardNumber}>{item.id}</span>
                    <div className={styles.titleGroup}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardSubtitle}>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
