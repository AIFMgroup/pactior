import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Karriär',
  description: 'Jobba på Pactior Group - vi söker alltid talangfulla personer som vill vara med och bygga framtidens finansiella tjänster för företagare.',
};

const openPositions = [
  {
    id: 1,
    title: 'Senior M&A Rådgivare',
    company: 'Trestor Partners',
    location: 'Stockholm',
    type: 'Heltid',
    description: 'Vi söker en erfaren M&A-rådgivare som vill hjälpa företagare genom hela försäljningsprocessen.',
  },
  {
    id: 2,
    title: 'Business Analyst',
    company: 'Valiora Analytics',
    location: 'Stockholm / Remote',
    type: 'Heltid',
    description: 'Delta i uppbyggnaden av vår värderingstjänst och utveckla analytiska modeller.',
    comingSoon: true,
  },
  {
    id: 3,
    title: 'Backend Developer',
    company: 'Vectoryx',
    location: 'Stockholm / Remote',
    type: 'Heltid',
    description: 'Bygg och utveckla vår API-plattform för företagsdata.',
    comingSoon: true,
  },
];

export default function Karriar() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="accent-line"></div>
          <h1>Karriär</h1>
          <p className={styles.heroSubtitle}>
            Bygg framtidens finansiella tjänster tillsammans med oss
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <h2>Varför Pactior Group?</h2>
              <p>
                Vi är ett växande företag med stora ambitioner. Hos oss får du 
                möjlighet att vara med och bygga något från grunden, arbeta med 
                spännande teknik och göra verklig skillnad för Sveriges företagare.
              </p>
              <p>
                Vi tror på en balans mellan arbete och fritid, och erbjuder 
                flexibla arbetsförhållanden. Vi värderar initiativtagande, 
                samarbete och en genuin vilja att hjälpa våra kunder.
              </p>
            </div>
            <div className={`pulsating-box ${styles.benefitsBox}`}>
              <h3>Vad vi erbjuder</h3>
              <ul className={styles.benefitsList}>
                <li>Konkurrenskraftig lön och förmåner</li>
                <li>Flexibla arbetstider och möjlighet till distansarbete</li>
                <li>Friskvårdsbidrag</li>
                <li>Kontinuerlig kompetensutveckling</li>
                <li>Möjlighet att påverka och växa med företaget</li>
                <li>En inkluderande och stöttande kultur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <div className="text-center mb-xl">
            <div className="accent-line accent-line-center"></div>
            <h2>Våra värderingar</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Integritet</h4>
              <p>
                Vi gör alltid det som är rätt för våra kunder, 
                även när ingen ser på.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Innovation</h4>
              <p>
                Vi utmanar status quo och söker ständigt bättre 
                sätt att lösa problem.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Samarbete</h4>
              <p>
                Tillsammans når vi längre. Vi delar kunskap och 
                stöttar varandra.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Excellens</h4>
              <p>
                Vi strävar efter högsta kvalitet i allt vi gör 
                och levererar alltid vårt bästa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className={`section ${styles.positions}`}>
        <div className="container">
          <div className="text-center mb-xl">
            <div className="accent-line accent-line-center"></div>
            <h2>Lediga tjänster</h2>
            <p className={styles.positionsSubtitle}>
              Se våra aktuella möjligheter nedan
            </p>
          </div>

          <div className={styles.positionsList}>
            {openPositions.map((position) => (
              <div 
                key={position.id} 
                className={`pulsating-box ${styles.positionCard} ${position.comingSoon ? styles.comingSoonCard : ''}`}
              >
                {position.comingSoon && (
                  <span className="badge-coming-soon">Kommande</span>
                )}
                <div className={styles.positionHeader}>
                  <h3>{position.title}</h3>
                  <span className={styles.positionCompany}>{position.company}</span>
                </div>
                <p className={styles.positionDesc}>{position.description}</p>
                <div className={styles.positionMeta}>
                  <span className={styles.metaItem}>{position.location}</span>
                  <span className={styles.metaItem}>{position.type}</span>
                </div>
                {!position.comingSoon ? (
                  <Link href="/kontakt" className={styles.applyBtn}>
                    Ansök nu
                  </Link>
                ) : (
                  <span className={styles.applyBtnDisabled}>Kommer snart</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className={`section section-dark ${styles.spontaneous}`}>
        <div className="container text-center">
          <h2>Hittar du inte rätt tjänst?</h2>
          <p className={styles.spontaneousText}>
            Vi är alltid intresserade av att träffa talangfulla personer. 
            Skicka in en spontanansökan så hör vi av oss när något passar.
          </p>
          <Link href="/kontakt" className="btn btn-primary">
            Skicka spontanansökan
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.process}`}>
        <div className="container container-narrow">
          <div className="text-center mb-xl">
            <div className="accent-line accent-line-center"></div>
            <h2>Vår rekryteringsprocess</h2>
          </div>
          <div className={styles.processSteps}>
            <div className={`pulsating-box ${styles.processStep}`}>
              <span className={styles.stepNumber}>1</span>
              <h4>Ansökan</h4>
              <p>
                Skicka in ditt CV och ett personligt brev via kontaktformuläret. 
                Berätta varför du är intresserad av tjänsten.
              </p>
            </div>
            <div className={`pulsating-box ${styles.processStep}`}>
              <span className={styles.stepNumber}>2</span>
              <h4>Första samtal</h4>
              <p>
                Ett kortare telefonsamtal där vi lär känna varandra och 
                du får veta mer om rollen.
              </p>
            </div>
            <div className={`pulsating-box ${styles.processStep}`}>
              <span className={styles.stepNumber}>3</span>
              <h4>Intervju</h4>
              <p>
                En djupare intervju på plats eller via video där vi 
                diskuterar din erfarenhet och ambitioner.
              </p>
            </div>
            <div className={`pulsating-box ${styles.processStep}`}>
              <span className={styles.stepNumber}>4</span>
              <h4>Case/Uppgift</h4>
              <p>
                Beroende på roll kan vi be dig genomföra en praktisk 
                uppgift för att visa dina färdigheter.
              </p>
            </div>
            <div className={`pulsating-box ${styles.processStep}`}>
              <span className={styles.stepNumber}>5</span>
              <h4>Erbjudande</h4>
              <p>
                Om allt känns rätt från båda håll presenterar vi ett 
                erbjudande och välkomnar dig till teamet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

