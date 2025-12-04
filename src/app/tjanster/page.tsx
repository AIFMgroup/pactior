import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Våra tjänster',
  description: 'Pactior Group erbjuder företagsförmedling, företagsvärdering och dataanalys genom våra specialiserade dotterbolag Trestor Partners, Valiora Analytics och Vectoryx.',
};

export default function Tjanster() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="accent-line"></div>
          <h1>Våra tjänster</h1>
          <p className={styles.heroSubtitle}>
            Specialiserade lösningar för varje steg i din företagarresa
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`section ${styles.intro}`}>
        <div className="container container-narrow text-center">
          <p className={styles.introText}>
            Genom våra dotterbolag erbjuder vi ett komplett utbud av finansiella 
            tjänster för företagare. Varje bolag är specialiserat inom sitt område 
            och levererar expertis av högsta klass.
          </p>
        </div>
      </section>

      {/* Trestor Partners */}
      <section className={`section ${styles.service}`} id="trestor">
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceHeader}>
                <Image 
                  src="/logos/Trestor_logo.png" 
                  alt="Trestor Partners" 
                  width={200}
                  height={70}
                  style={{ objectFit: 'contain' }}
                  className={styles.serviceLogo}
                />
                <span className={styles.serviceStatus}>Aktivt</span>
              </div>
              <h2>Trestor Partners</h2>
              <p className={styles.serviceType}>Företagsförmedling</p>
              <p>
                Trestor Partners är vår specialiserade partner för företagsförmedling. 
                Vi hjälper företagsägare att hitta rätt köpare och genomföra 
                försäljningen på bästa möjliga sätt.
              </p>
              <h4>Vad vi erbjuder</h4>
              <ul className={`list-styled ${styles.serviceList}`}>
                <li>Professionell värdering och prissättning</li>
                <li>Framtagning av säljmaterial och informationsmemorandum</li>
                <li>Identifiering och kontakt med potentiella köpare</li>
                <li>Förhandlingsstöd och avtalsgenomgång</li>
                <li>Stöd genom hela transaktionsprocessen</li>
              </ul>
              <h4>För vem</h4>
              <p>
                Trestor Partners riktar sig till ägare av små och medelstora företag 
                som överväger att sälja hela eller delar av sin verksamhet. Vi arbetar 
                med företag i alla branscher med en omsättning från 5 MSEK och uppåt.
              </p>
              <a 
                href="https://trestor.se" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Besök Trestor Partners
              </a>
            </div>
            <div className={styles.serviceVisual}>
              <div className={`pulsating-box ${styles.serviceBox}`}>
                <h4>Fördelar med Trestor</h4>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Erfarenhet</span>
                    <span className={styles.benefitDesc}>100+ genomförda affärer</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Nätverk</span>
                    <span className={styles.benefitDesc}>Bred köparbas inom och utom Sverige</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Konfidentialitet</span>
                    <span className={styles.benefitDesc}>Diskret process från start till mål</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Resultat</span>
                    <span className={styles.benefitDesc}>Optimerat försäljningspris</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valiora Analytics */}
      <section className={`section ${styles.service} ${styles.serviceAlt}`} id="valiora">
        <div className="container">
          <div className={`${styles.serviceGrid} ${styles.serviceGridReverse}`}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceHeader}>
                <Image 
                  src="/logos/Valiora_logo.png" 
                  alt="Valiora Analytics" 
                  width={200}
                  height={70}
                  style={{ objectFit: 'contain' }}
                  className={styles.serviceLogo}
                />
                <span className={`${styles.serviceStatus} ${styles.statusSoon}`}>Kommer snart</span>
              </div>
              <h2>Valiora Analytics</h2>
              <p className={styles.serviceType}>Företagsvärdering</p>
              <p>
                Valiora Analytics kommer att erbjuda professionella företagsvärderingar 
                med hjälp av avancerad dataanalys och branschspecifik expertis. Få en 
                rättvis och väldokumenterad värdering av ditt företag.
              </p>
              <h4>Planerade tjänster</h4>
              <ul className={`list-styled ${styles.serviceList}`}>
                <li>Fullständig företagsvärdering med DCF-analys</li>
                <li>Snabbvärdering för orientering</li>
                <li>Branschspecifika multipelvärderingar</li>
                <li>Second opinion på befintliga värderingar</li>
                <li>Värdering för generationsskiften och ägarförändringar</li>
              </ul>
              <h4>Varför Valiora</h4>
              <p>
                Vi kombinerar traditionella värderingsmetoder med modern dataanalys 
                för att ge dig en mer precis och välgrundad bild av ditt företags 
                värde. Våra analyser är transparenta och lätta att förstå.
              </p>
              <button className="btn btn-secondary" disabled>
                Lanseras 2025
              </button>
            </div>
            <div className={styles.serviceVisual}>
              <div className={`pulsating-box ${styles.serviceBox} ${styles.comingSoonBox}`}>
                <h4>Kommande funktioner</h4>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>AI-driven analys</span>
                    <span className={styles.benefitDesc}>Avancerade algoritmer för precision</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Realtidsdata</span>
                    <span className={styles.benefitDesc}>Uppdaterade marknadsdata</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Branschinsikter</span>
                    <span className={styles.benefitDesc}>Djup sektorkunskap</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Digital rapport</span>
                    <span className={styles.benefitDesc}>Interaktiv värderingsrapport</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vectoryx */}
      <section className={`section ${styles.service}`} id="vectoryx">
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceHeader}>
                <Image 
                  src="/logos/Vectoryx_logo.png" 
                  alt="Vectoryx" 
                  width={200}
                  height={70}
                  style={{ objectFit: 'contain' }}
                  className={styles.serviceLogo}
                />
                <span className={`${styles.serviceStatus} ${styles.statusSoon}`}>Kommer snart</span>
              </div>
              <h2>Vectoryx</h2>
              <p className={styles.serviceType}>Företagsdata White Label</p>
              <p>
                Vectoryx utvecklar en white-label plattform för företagsdata som 
                möjliggör för banker, försäkringsbolag och andra partners att 
                erbjuda högkvalitativ företagsinformation under sitt eget varumärke.
              </p>
              <h4>Planerade tjänster</h4>
              <ul className={`list-styled ${styles.serviceList}`}>
                <li>White-label API för företagsdata</li>
                <li>Kreditbedömningsverktyg</li>
                <li>Branschanalys och benchmarking</li>
                <li>Ägarstruktur och koncernträd</li>
                <li>Anpassningsbar frontend-lösning</li>
              </ul>
              <h4>För partners</h4>
              <p>
                Vectoryx riktar sig till företag som vill erbjuda företagsdata 
                och analys som en del av sin egen tjänst. Perfekt för banker, 
                kreditgivare, bokföringsbyråer och konsultfirmor.
              </p>
              <button className="btn btn-secondary" disabled>
                Lanseras 2025
              </button>
            </div>
            <div className={styles.serviceVisual}>
              <div className={`pulsating-box ${styles.serviceBox} ${styles.comingSoonBox}`}>
                <h4>Teknisk plattform</h4>
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>REST API</span>
                    <span className={styles.benefitDesc}>Enkel integration</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Realtid</span>
                    <span className={styles.benefitDesc}>Uppdaterad data dygnet runt</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>Skalbar</span>
                    <span className={styles.benefitDesc}>Från startup till enterprise</span>
                  </div>
                  <div className={styles.benefit}>
                    <span className={styles.benefitTitle}>GDPR-säker</span>
                    <span className={styles.benefitDesc}>Full regelefterlevnad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section section-dark ${styles.cta}`}>
        <div className="container text-center">
          <h2>Vill du veta mer?</h2>
          <p className={styles.ctaText}>
            Kontakta oss för att diskutera hur vi kan hjälpa dig och ditt företag. 
            Första konsultationen är alltid kostnadsfri.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Boka ett samtal
          </Link>
        </div>
      </section>
    </>
  );
}

