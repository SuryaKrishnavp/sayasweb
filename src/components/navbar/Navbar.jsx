import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '/public/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          {/* Logo + brand */}
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Saya Food Products" className={styles.logoImage} />
            <div className={styles.brandInfo}>
              <div className={styles.brandName}>Sayas Group of Companies</div>
              <div className={styles.brandTagline}>Manufacturers & Exporters</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className={styles.navLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active : ''}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/export"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active : ''}`
              }
            >
              Export & Franchise
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active : ''}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.nav_link} ${isActive ? styles.active : ''}`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className={styles.menuButton}
          >
            {open ? (
              <svg className={styles.menuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className={styles.menuIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
          <div className={styles.mobileLinks}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ''}`
              }
              end
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/export"
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setOpen(false)}
            >
              Export & Franchise
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.active : ''}`
              }
              onClick={() => setOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

