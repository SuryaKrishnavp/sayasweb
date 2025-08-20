import { useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
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

    // Observe all elements with animation classes
    document.querySelectorAll(`.${styles.sectionTitle}, .${styles.vmvCard}, .${styles.businessCard}, .${styles.productCard}, .${styles.fadeInUp}, .${styles.viewMoreContainer}`)
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.welcomeText}>Welcome to</span>
            <span className={styles.companyName}>Sayas Group of Company</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A fast-growing food innovation brand from Kerala, India, blending traditional taste with modern technology
          </p>
        </div>
        <div className={styles.scrollDown}>
          <div className={styles.arrow}></div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About Us</h2>
          <p className={`${styles.fadeInUp}`}>
            Sayas Group of Company is a fast-growing food innovation brand from Kerala, India. 
            We specialize in frozen food products, unique tea shop concept (Qalb Chai Point), 
            and custom sauces & mayonnaise production. With a strong vision to go global, 
            we focus on blending traditional taste with modern technology.
          </p>

          {/* Vision Mission Values */}
          <div className={styles.vmvGrid}>
            <div className={styles.vmvCard}>
              <h3 className={styles.vmvTitle}>Our Vision</h3>
              <p>To become a global leader in innovative food products while preserving traditional flavors</p>
            </div>
            <div className={styles.vmvCard}>
              <h3 className={styles.vmvTitle}>Our Mission</h3>
              <p>To deliver high-quality, innovative food products that blend tradition with modern technology</p>
            </div>
            <div className={styles.vmvCard}>
              <h3 className={styles.vmvTitle}>Our Values</h3>
              <p>Quality, Innovation, Tradition, Customer Satisfaction, and Sustainable Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className={`${styles.section}`} style={{ background: '#f9f9f9' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Business Divisions</h2>
          <div className={styles.businessGrid}>
            <div className={styles.businessCard}>
              <div className={styles.businessImage}>
                <img src="/frozen.jpg" alt="Frozen Food Division" />
              </div>
              <div className={styles.businessContent}>
                <h3 className={styles.businessTitle}>Frozen Food Division</h3>
                <ul className={styles.businessList}>
                  <li>Traditional Palappam (Frozen)</li>
                  <li>Authentic Vattayappam (Frozen)</li>
                  <li>Ready-to-Eat Kanji (Powder & Liquid)</li>
                  <li>Premium Frozen Kerala Snacks</li>
                </ul>
              </div>
            </div>
            <div className={styles.businessCard}>
              <div className={styles.businessImage}>
                <img src="/Teapot.jpg" alt="Qalb Chai Point" />
              </div>
              <div className={styles.businessContent}>
                <h3 className={styles.businessTitle}>Qalb Chai Point</h3>
                <ul className={styles.businessList}>
                  <li>Premium Tea Lounge Brand</li>
                  <li>Gulf-Indian Fusion Experience</li>
                  <li>Exclusive Franchise Model</li>
                  <li>Available in India & GCC</li>
                </ul>
              </div>
            </div>
            <div className={styles.businessCard}>
              <div className={styles.businessImage}>
                <img src="/saucemayonnise.jpg" alt="Sauces & Mayonnaise" />
              </div>
              <div className={styles.businessContent}>
                <h3 className={styles.businessTitle}>Sauces & Mayonnaise</h3>
                <ul className={styles.businessList}>
                  <li>Custom Sauce Development</li>
                  <li>Premium Mayonnaise Production</li>
                  <li>Restaurant Supply Solutions</li>
                  <li>Quality-Focused Manufacturing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <div className={styles.productsGrid}>
            <div className={styles.productCard}>
              <img src="/sauce.jpg" alt="Premium Sauce" className={styles.productImage} />
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>Premium Sauces</h3>
                <p className={styles.productDescription}>
                  High-quality sauces crafted with select ingredients. Perfect blend of flavors for every dish.
                </p>
              </div>
            </div>
            <div className={styles.productCard}>
              <img src="/mayonniasse.jpg" alt="Premium Mayonnaise" className={styles.productImage} />
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>Premium Mayonnaise</h3>
                <p className={styles.productDescription}>
                  Creamy, rich mayonnaise in classic and unique flavors. Ideal for sandwiches and salads.
                </p>
              </div>
            </div>
            <div className={styles.productCard}>
              <img src="/kanji.jpg" alt="Kanji Powder" className={styles.productImage} />
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>Kanji Powder</h3>
                <p className={styles.productDescription}>
                  Traditional Kerala Kanji powder. Quick to prepare, nutritious, and authentically flavored.
                </p>
              </div>
            </div>
            <div className={styles.productCard}>
              <img src="/food_collage.jpg" alt="Snacks Collection" className={styles.productImage} />
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>Premium Snacks</h3>
                <p className={styles.productDescription}>
                  Delicious veg and non-veg snacks. Fresh, crispy, and made with authentic recipes.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.viewMoreContainer}>
            <a href="/products" className={styles.viewMoreLink}>
              View More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}