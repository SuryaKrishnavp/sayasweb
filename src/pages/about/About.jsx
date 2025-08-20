import { useEffect } from 'react';
import styles from './About.module.css';

export default function About() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe elements with animation classes
    document.querySelectorAll(`.${styles.animateSection}`)
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Our Journey of Excellence</h1>
          <p>Crafting Quality Food Products Since 2010</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className={`${styles.section} ${styles.animateSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Who We Are</h2>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <p>Sayas Group of Company is a premier food manufacturing company based in Kerala, India. We specialize in producing high-quality sauces, mayonnaise, and traditional foods that blend authentic flavors with modern food technology.</p>
              <p>Our state-of-the-art manufacturing facility ensures that every product meets international quality standards while maintaining the authentic taste that our customers love.</p>
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>13+</span>
                <span className={styles.statLabel}>Years of Excellence</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Product Varieties</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1000+</span>
                <span className={styles.statLabel}>Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className={`${styles.section} ${styles.qualitySection} ${styles.animateSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Commitment to Quality</h2>
          <div className={styles.qualityGrid}>
            <div className={styles.qualityCard}>
              <div className={styles.qualityIcon}>🏆</div>
              <h3>Premium Ingredients</h3>
              <p>We source only the finest ingredients to ensure exceptional taste and quality in every product.</p>
            </div>
            <div className={styles.qualityCard}>
              <div className={styles.qualityIcon}>🔬</div>
              <h3>Quality Control</h3>
              <p>Rigorous testing and quality control measures at every stage of production.</p>
            </div>
            <div className={styles.qualityCard}>
              <div className={styles.qualityIcon}>🌱</div>
              <h3>Sustainability</h3>
              <p>Committed to sustainable practices and environmental responsibility.</p>
            </div>
            <div className={styles.qualityCard}>
              <div className={styles.qualityIcon}>💫</div>
              <h3>Innovation</h3>
              <p>Continuous innovation in products and processes to meet evolving customer needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className={`${styles.section} ${styles.milestonesSection} ${styles.animateSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2010</h3>
                <p>Founded with a vision to bring authentic flavors to the world</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2015</h3>
                <p>Expanded product line with innovative sauce and mayonnaise varieties</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2018</h3>
                <p>Achieved ISO certification for quality management</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>2023</h3>
                <p>Launched export operations to global markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className={`${styles.section} ${styles.visionSection} ${styles.animateSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Looking Ahead</h2>
          <div className={styles.visionContent}>
            <p>At Sayas Group  of Companies, we're committed to continuous innovation and growth. Our vision extends beyond just creating food products - we aim to bring the authentic flavors of India to tables around the world while maintaining the highest standards of quality and customer satisfaction.</p>
            <div className={styles.ctaButton}>
              <a href="/contact">Connect With Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
