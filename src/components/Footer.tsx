import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image 
                src="/logos/Pactior_logo.png" 
                alt="Pactior Group" 
                width={140}
                height={35}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className={styles.tagline}>
              Vi hjälper företagare att få en enklare vardag genom smarta lösningar och mänsklig expertis.
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            <nav className={styles.footerNav}>
              <Link href="/">Hem</Link>
              <Link href="/om-oss">Om oss</Link>
              <Link href="/tjanster">Våra tjänster</Link>
              <Link href="/nyheter">Nyheter</Link>
              <Link href="/karriar">Karriär</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>
          </div>

          {/* Our Companies */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Våra bolag</h4>
            <nav className={styles.footerNav}>
              <a href="https://trestor.se" target="_blank" rel="noopener noreferrer">
                Trestor Partners
              </a>
              <span className={styles.comingSoon}>Valiora Analytics</span>
              <span className={styles.comingSoon}>Vectoryx</span>
            </nav>
          </div>

          {/* Legal */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Juridiskt</h4>
            <nav className={styles.footerNav}>
              <Link href="/integritetspolicy">Integritetspolicy</Link>
              <Link href="/villkor">Användarvillkor</Link>
              <Link href="/cookies">Cookies</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {currentYear} Pactior Group AB. Alla rättigheter förbehållna.
          </p>
          <div className={styles.contact}>
            <span>Stockholm, Sverige</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

