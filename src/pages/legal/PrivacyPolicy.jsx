import React from 'react';
import styles from './Legal.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
        </div>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p className={styles.paragraph}>
              We collect information that you provide directly to us when using our website or services.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Personal identification information (Name, email address, phone number)</li>
              <li className={styles.listItem}>Business information for corporate customers</li>
              <li className={styles.listItem}>Communication preferences</li>
              <li className={styles.listItem}>Website usage data and cookies</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p className={styles.paragraph}>
              We use the collected information for the following purposes:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>To process and fulfill your orders</li>
              <li className={styles.listItem}>To communicate with you about our products and services</li>
              <li className={styles.listItem}>To improve our website and customer service</li>
              <li className={styles.listItem}>To send periodic emails about our products and promotional offers</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Information Protection</h2>
            <p className={styles.paragraph}>
              We implement appropriate security measures to maintain the safety of your personal information. This includes:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Secure SSL encryption for data transmission</li>
              <li className={styles.listItem}>Regular security assessments</li>
              <li className={styles.listItem}>Limited access to personal information by authorized personnel only</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Cookies and Tracking</h2>
            <p className={styles.paragraph}>
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect some website functionality.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Third-Party Disclosure</h2>
            <p className={styles.paragraph}>
              We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or for business operations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Your Rights</h2>
            <p className={styles.paragraph}>
              You have the right to:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Access your personal information</li>
              <li className={styles.listItem}>Request correction of inaccurate information</li>
              <li className={styles.listItem}>Opt-out of marketing communications</li>
              <li className={styles.listItem}>Request deletion of your information where applicable</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <span className={styles.emphasis}>info@sayafoodproducts.com</span>
            </p>
          </section>

          <p className={styles.lastUpdated}>Last updated: August 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
