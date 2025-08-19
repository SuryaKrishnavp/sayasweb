import React, { useEffect, useRef } from 'react';
import styles from './Export.module.css';

const Export = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className={styles.exportPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Global Export Excellence</h1>
          <p>Bringing Quality Indian Food Products to the World</p>
        </div>
      </section>

      <section ref={addToRefs} className={`${styles.section} ${styles.animateSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Global Presence</h2>
          <div className={styles.marketGrid}>
            <div className={styles.marketCard}>
              <div className={styles.marketIcon}>🇦🇪</div>
              <h3>UAE</h3>
              <p>Primary Export Hub</p>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketIcon}>🇴🇲</div>
              <h3>Oman</h3>
              <p>Strategic Partner</p>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketIcon}>🇧🇭</div>
              <h3>Kingdom of Bahrain</h3>
              <p>Growing Market</p>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketIcon}>🇦🇺</div>
              <h3>Australia</h3>
              <p>Expanding Presence</p>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketIcon}>🇪🇺</div>
              <h3>Europe</h3>
              <p>Emerging Market</p>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketIcon}>🌍</div>
              <h3>GCC Countries</h3>
              <p>Regional Focus</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className={`${styles.section} ${styles.logistics} ${styles.animateSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Export Excellence</h2>
          <div className={styles.logisticsGrid}>
            <div className={styles.logisticsCard}>
              <div className={styles.cardIcon}>📦</div>
              <h3>Export-Grade Packaging</h3>
              <p>All products follow international packaging standards ensuring quality preservation during transit</p>
            </div>
            <div className={styles.logisticsCard}>
              <div className={styles.cardIcon}>❄️</div>
              <h3>Cold Chain Logistics</h3>
              <p>Temperature-controlled supply chain maintaining product freshness from factory to destination</p>
            </div>
            <div className={styles.logisticsCard}>
              <div className={styles.cardIcon}>📃</div>
              <h3>Compliance</h3>
              <p>Strict adherence to international food safety standards and export regulations</p>
            </div>
            <div className={styles.logisticsCard}>
              <div className={styles.cardIcon}>🚢</div>
              <h3>Global Distribution</h3>
              <p>Efficient shipping network ensuring timely delivery worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={addToRefs} className={`${styles.section} ${styles.contact} ${styles.animateSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Export Inquiries</h2>
          <div className={styles.contactContent}>
            <p>Looking to import our products? We'd love to hear from you.</p>
            <button className={styles.ctaButton}><a href="/contact">Connect With Us</a></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Export;
