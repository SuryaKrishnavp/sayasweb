import React from 'react';
import styles from './Business.module.css';

export default function Business() {
  return (
    <div className={styles.business}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Business Divisions</h1>
          <p className={styles.heroSubtitle}>
            Discover our innovative food ventures, blending tradition with modern excellence
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.businessUnit}>
            <div className={styles.businessContent}>
              <h2 className={styles.businessTitle}>Frozen Food Division</h2>
              <p className={styles.businessDescription}>
                Preserving the authentic taste of Kerala through innovative freezing technology. 
                Our state-of-the-art facility ensures that every product maintains its original 
                flavor and quality.
              </p>
              <div className={styles.productCategories}>
                <h3 className={styles.categoryTitle}>Signature Products:</h3>
                <div className={styles.categoryGrid}>
                  <div className={styles.categoryCard}>
                    <h4>Premium Frozen Palappam</h4>
                    <p>Traditional Kerala rice pancakes, perfectly preserved for convenience without compromising taste.</p>
                  </div>
                  <div className={styles.categoryCard}>
                    <h4>Authentic Vattayappam</h4>
                    <p>Soft, steamed rice cake with a delicate sweetness, ready to serve in minutes.</p>
                  </div>
                  <div className={styles.categoryCard}>
                    <h4>Ready-to-Eat Kanji</h4>
                    <p>Available in both powder and liquid forms, our traditional rice porridge offers comfort in every serving.</p>
                  </div>
                  <div className={styles.categoryCard}>
                    <h4>Kerala Snack Selection</h4>
                    <p>A curated range of frozen Kerala snacks, maintaining authentic taste and texture.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.businessUnit}>
            <div className={styles.businessContent}>
              <h2 className={styles.businessTitle}>Qalb Chai Point</h2>
              <p className={styles.businessDescription}>
                A premium tea lounge brand that brings together the rich traditions of Indian tea culture 
                with Gulf-inspired innovations. Our unique concept offers an immersive beverage experience.
              </p>
              <div className={styles.features}>
                <div className={styles.featureCard}>
                  <h3>Premium Experience</h3>
                  <p>Luxurious ambiance combined with exceptional service and premium beverages.</p>
                </div>
                <div className={styles.featureCard}>
                  <h3>Gulf-Indian Fusion</h3>
                  <p>Unique blend of flavors and presentations that celebrate both cultures.</p>
                </div>
                <div className={styles.featureCard}>
                  <h3>Franchise Opportunities</h3>
                  <p>Exclusive franchise model available across India and GCC countries.</p>
                </div>
                <div className={styles.featureCard}>
                  <h3>Innovation Hub</h3>
                  <p>Continuous development of new beverage concepts and flavor combinations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.businessUnit}>
            <div className={styles.businessContent}>
              <h2 className={styles.businessTitle}>Sauces & Mayonnaise Division</h2>
              <p className={styles.businessDescription}>
                Specializing in the development and production of premium sauces and mayonnaise, 
                tailored to meet specific culinary requirements of restaurants and food service providers.
              </p>
              <div className={styles.services}>
                <div className={styles.serviceCard}>
                  <h3>Custom Development</h3>
                  <ul>
                    <li>Bespoke sauce formulation</li>
                    <li>Flavor profile customization</li>
                    <li>Consistency optimization</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <h3>Quality Manufacturing</h3>
                  <ul>
                    <li>State-of-the-art production facility</li>
                    <li>Strict quality control measures</li>
                    <li>Consistent product quality</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <h3>Restaurant Solutions</h3>
                  <ul>
                    <li>Bulk supply capabilities</li>
                    <li>Customized packaging options</li>
                    <li>Professional consultation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
