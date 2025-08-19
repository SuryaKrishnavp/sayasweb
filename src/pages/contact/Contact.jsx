import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Just log the form data since we don't need to process it
    console.log('Form submitted:', formData);
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>
            Have questions about our products? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <section className={styles.formSection}>
            <h2 className={styles.formTitle}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">Subject</label>
                <input
                  className={styles.input}
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  placeholder="How can we help?"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="Your message here..."
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
                <span>➜</span>
              </button>
            </form>
          </section>

          <section className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Our Office</h2>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div className={styles.infoContent}>
                  <h3>Address</h3>
                  <p>
                    1st Floor, 14/291 K Suite 76C<br />
                    A Square Edathala P.O.<br />
                    Kuzhivellipadi, Vazhakulam<br />
                    Ernakulam, Kerala - 683561<br />
                    India
                  </p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>✉️</span>
                <div className={styles.infoContent}>
                  <h3>Email</h3>
                  <p>info@sayafoodproducts.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📞</span>
                <div className={styles.infoContent}>
                  <h3>Phone</h3>
                  <p>+91 123 456 7890</p>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>Business Hours</h2>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🕒</span>
                <div className={styles.infoContent}>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

           
          </section>
        </div>
      </div>
    </div>
  );
             
}
