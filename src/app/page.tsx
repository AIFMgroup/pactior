import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.accentLine}></div>
          <h1 className={styles.heroTitle}>
            Finansiella lösningar för
            <span className={styles.heroHighlight}> framtidens företagare</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Vi föddes ur övertygelsen att företagare är samhällets ryggrad. 
            Vår mission är att förenkla vardagen för de som bygger Sverige.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/tjanster" className="btn btn-primary">
              Utforska våra tjänster
            </Link>
            <Link href="/om-oss" className="btn btn-secondary">
              Läs mer om oss
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <div className="accent-line"></div>
              <h2>Vi kombinerar teknologi med mänsklig expertis</h2>
              <p>
                I en värld där AI och automation tar allt större plats, tror vi fortfarande 
                på värdet av mänsklig kontakt och expertis. Våra bolag använder de senaste 
                teknologiska verktygen, men det är alltid en erfaren rådgivare som står 
                bakom varje beslut.
              </p>
              <p>
                Pactior Group samlar bolag som delar samma vision: att göra det enklare 
                för företagare att navigera komplexa finansiella beslut.
              </p>
            </div>
            <div className={`${styles.introBox} pulsating-box`}>
              <h3>Våra värderingar</h3>
              <ul className={styles.valuesList}>
                <li>
                  <strong>Integritet</strong>
                  <span>Vi agerar alltid i våra kunders bästa intresse</span>
                </li>
                <li>
                  <strong>Expertis</strong>
                  <span>Djup kunskap inom varje specialområde</span>
                </li>
                <li>
                  <strong>Innovation</strong>
                  <span>Moderna verktyg för bättre resultat</span>
                </li>
                <li>
                  <strong>Transparens</strong>
                  <span>Tydlig kommunikation genom hela processen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className={`section ${styles.companies}`}>
        <div className="container">
          <div className="text-center mb-xl">
            <div className="accent-line accent-line-center"></div>
            <h2>Våra bolag</h2>
            <p className={styles.sectionSubtitle}>
              Specialiserade företag med gemensam vision
            </p>
          </div>

          <div className={styles.companiesGrid}>
            {/* Trestor Partners */}
            <div className={`${styles.companyCard} pulsating-box`}>
              <div className={styles.companyLogo}>
                <Image 
                  src="/logos/Trestor_logo.png" 
                  alt="Trestor Partners" 
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3>Trestor Partners</h3>
              <p className={styles.companyType}>Företagsförmedling</p>
              <p>
                Trestor Partners specialiserar sig på att förmedla företag och hjälpa 
                ägare genom hela försäljningsprocessen. Med djup förståelse för marknaden 
                och ett stort nätverk av köpare, säkerställer vi bästa möjliga utfall.
              </p>
              <a 
                href="https://trestor.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn btn-primary ${styles.companyBtn}`}
              >
                Besök Trestor
              </a>
            </div>

            {/* Valiora Analytics */}
            <div className={`${styles.companyCard} ${styles.comingSoon} pulsating-box`}>
              <span className="badge-coming-soon">Kommer snart</span>
              <div className={styles.companyLogo}>
                <Image 
                  src="/logos/Valiora_logo.png" 
                  alt="Valiora Analytics" 
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3>Valiora Analytics</h3>
              <p className={styles.companyType}>Företagsvärdering</p>
              <p>
                Valiora Analytics kommer att erbjuda professionella företagsvärderingar 
                med hjälp av avancerad dataanalys och branschexpertis. Få en rättvis 
                och transparent värdering av ditt företag.
              </p>
              <button className={`btn btn-secondary ${styles.companyBtn}`} disabled>
                Kommer 2025
              </button>
            </div>

            {/* Vectoryx */}
            <div className={`${styles.companyCard} ${styles.comingSoon} pulsating-box`}>
              <span className="badge-coming-soon">Kommer snart</span>
              <div className={styles.companyLogo}>
                <Image 
                  src="/logos/Vectoryx_logo.png" 
                  alt="Vectoryx" 
                  width={180}
                  height={60}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3>Vectoryx</h3>
              <p className={styles.companyType}>Företagsdata White Label</p>
              <p>
                Vectoryx utvecklar en white-label plattform för företagsdata som 
                möjliggör för partners att erbjuda högkvalitativ företagsinformation 
                under sitt eget varumärke.
              </p>
              <button className={`btn btn-secondary ${styles.companyBtn}`} disabled>
                Kommer 2025
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section section-dark ${styles.cta}`}>
        <div className="container text-center">
          <h2>Redo att ta nästa steg?</h2>
          <p className={styles.ctaText}>
            Oavsett om du funderar på att sälja ditt företag, behöver en värdering 
            eller vill veta mer om våra tjänster, finns vi här för att hjälpa dig.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Kontakta oss idag
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`section ${styles.stats}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={`${styles.statBox} pulsating-box-subtle`}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>År av erfarenhet</span>
            </div>
            <div className={`${styles.statBox} pulsating-box-subtle`}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Genomförda affärer</span>
            </div>
            <div className={`${styles.statBox} pulsating-box-subtle`}>
              <span className={styles.statNumber}>500M+</span>
              <span className={styles.statLabel}>SEK i transaktionsvärde</span>
            </div>
            <div className={`${styles.statBox} pulsating-box-subtle`}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Nöjda kunder</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

