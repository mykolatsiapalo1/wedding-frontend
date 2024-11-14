'use client'
import React, { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>WDING®</div>

      <div className={`${styles.burger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <a href="#" className={styles.navLink}>
          Planning Templates
        </a>
        <a href="#" className={styles.navLink}>
          Stationery & Invitations
        </a>
        <a href="#" className={styles.navLink}>
          Ceremony & Reception Essentials
        </a>
        <a href="#" className={styles.navLink}>
          Decor & Signage
        </a>
        <a href="#" className={styles.navLink}>
          Website & Digital
        </a>
      </nav>
    </header>
  )
}

export default Header
