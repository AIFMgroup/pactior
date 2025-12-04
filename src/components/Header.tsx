'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logos/Pactior_logo.png" 
            alt="Pactior Group" 
            width={160}
            height={40}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Hem
          </Link>
          <Link href="/om-oss" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Om oss
          </Link>
          <Link href="/tjanster" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Våra tjänster
          </Link>
          <Link href="/kontakt" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
            Kontakt
          </Link>
        </nav>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineOpen1 : ''}`}></span>
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineOpen2 : ''}`}></span>
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineOpen3 : ''}`}></span>
        </button>
      </div>
    </header>
  );
}

