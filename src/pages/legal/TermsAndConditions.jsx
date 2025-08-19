import React from 'react';
import styles from './Legal.module.css';

const TermsAndConditions = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Terms and Conditions</h1>
          <p className={styles.heroSubtitle}>
            Please read these terms and conditions carefully before using our website and services.
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.paragraph}>
              Welcome to Saya Food Products. By accessing and using our website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Use of Website</h2>
            <p className={styles.paragraph}>
              You agree to use our website for lawful purposes only and in a way that does not infringe upon the rights of others or restrict their use of the website.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>The content on this website is for general information purposes only</li>
              <li className={styles.listItem}>We reserve the right to modify or withdraw the website content at any time</li>
              <li className={styles.listItem}>We strive to provide accurate information but cannot guarantee its completeness or accuracy</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Products and Services</h2>
            <p className={styles.paragraph}>
              All products displayed on our website are subject to availability. We reserve the right to discontinue or modify any product without prior notice.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Product images are for illustrative purposes only</li>
              <li className={styles.listItem}>Product specifications may vary by region</li>
              <li className={styles.listItem}>Prices are subject to change without notice</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
            <p className={styles.paragraph}>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Saya Food Products and is protected by intellectual property laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Product Quality and Safety</h2>
            <p className={styles.paragraph}>
              While we maintain high standards for our products, we recommend checking all product labels and warnings before use. Consumers are responsible for proper storage and handling of products according to instructions.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Export Regulations</h2>
            <p className={styles.paragraph}>
              Our products are subject to export laws and regulations. Customers engaging in international transactions must comply with all applicable local and international laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Limitation of Liability</h2>
            <p className={styles.paragraph}>
              Saya Food Products shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our products or services.
            </p>
          </section>

          <p className={styles.lastUpdated}>Last updated: August 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
