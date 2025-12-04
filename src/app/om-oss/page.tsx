import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'Lär känna Pactior Group - ett bolag som föddes ur övertygelsen att företagare är samhällets ryggrad. Vi kombinerar AI med mänsklig expertis.',
};

export default function OmOss() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="accent-line"></div>
          <h1>Om Pactior Group</h1>
          <p className={styles.heroSubtitle}>
            Vi föddes ur övertygelsen att företagare är samhällets ryggrad
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`section ${styles.story}`}>
        <div className="container container-narrow">
          <div className={`pulsating-box ${styles.storyBox}`}>
            <h2>Vår historia</h2>
            <p>
              Pactior Group grundades med en enkel men kraftfull vision: att göra 
              vardagen enklare för Sveriges företagare. Vi såg hur ägare av små och 
              medelstora företag kämpade med komplexa finansiella beslut samtidigt 
              som de försökte driva sin kärnverksamhet.
            </p>
            <p>
              Vårt namn, Pactior, kommer från latinets ord för överenskommelse och 
              förbund. Det speglar vår övertygelse om att de bästa affärsrelationerna 
              bygger på ömsesidig respekt, transparens och långsiktigt tänkande.
            </p>
            <p>
              Idag samlar vi specialiserade bolag under ett tak, alla med samma 
              grundläggande filosofi: att kombinera modern teknologi med genuin 
              mänsklig expertis.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={`section ${styles.visionMission}`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={`pulsating-box ${styles.vmCard}`}>
              <h3>Vår vision</h3>
              <p>
                Att vara Sveriges mest pålitliga partner för företagare som 
                står inför viktiga finansiella beslut. Vi strävar efter en 
                framtid där varje företagare har tillgång till samma kvalitet 
                på rådgivning som de största bolagen.
              </p>
            </div>
            <div className={`pulsating-box ${styles.vmCard}`}>
              <h3>Vår mission</h3>
              <p>
                Att förenkla vardagen för företagare genom att erbjuda 
                expertis inom företagsförmedling, värdering och dataanalys. 
                Vi gör det komplexa begripligt och hjälper våra kunder att 
                fatta välgrundade beslut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`section section-dark ${styles.philosophy}`}>
        <div className="container">
          <div className={styles.philosophyContent}>
            <h2>AI med mänsklig touch</h2>
            <p>
              Vi lever i en tid där artificiell intelligens revolutionerar hur vi 
              arbetar. På Pactior Group omfamnar vi denna utveckling fullt ut. Vi 
              använder avancerade AI-verktyg för analys, värdering och 
              matchmaking.
            </p>
            <p>
              Men vi har aldrig tappat bort det viktigaste: den mänskliga faktorn. 
              Bakom varje analys finns en erfaren rådgivare. Bakom varje 
              rekommendation finns år av branschkunskap. Och bakom varje 
              kundrelation finns genuint engagemang.
            </p>
            <p>
              Teknologin gör oss snabbare och mer precisa. Människorna gör oss 
              pålitliga och omtänksamma.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <div className="text-center mb-xl">
            <div className="accent-line accent-line-center"></div>
            <h2>Våra kärnvärden</h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Integritet</h4>
              <p>
                Vi agerar alltid i våra kunders bästa intresse. Vår rådgivning 
                är oberoende och baserad på vad som är rätt för dig, inte vad 
                som genererar mest intäkter för oss.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Expertis</h4>
              <p>
                Våra rådgivare har djup erfarenhet inom sina respektive områden. 
                Vi investerar kontinuerligt i kompetensutveckling för att ligga 
                i framkant.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Transparens</h4>
              <p>
                Inga dolda avgifter, inga överraskningar. Vi kommunicerar 
                tydligt om process, tidsramar och kostnader från första 
                kontakten.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Innovation</h4>
              <p>
                Vi använder moderna verktyg och metoder för att leverera 
                bättre resultat. Teknologi är vårt verktyg för att skapa 
                värde för våra kunder.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Långsiktighet</h4>
              <p>
                Vi bygger relationer, inte transaktioner. Vårt mål är att 
                vara din partner genom hela din företagarresa.
              </p>
            </div>
            <div className={`pulsating-box ${styles.valueCard}`}>
              <h4>Tillgänglighet</h4>
              <p>
                Professionell rådgivning ska inte vara reserverat för de 
                största bolagen. Vi gör expertis tillgänglig för alla 
                företagare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className={`section ${styles.team}`}>
        <div className="container container-narrow text-center">
          <div className="accent-line accent-line-center"></div>
          <h2>Vårt team</h2>
          <p className={styles.teamText}>
            Bakom Pactior Group står ett team av erfarna finansexperter, 
            teknologer och rådgivare. Vi kommer från olika bakgrunder men 
            förenas av en gemensam passion: att hjälpa företagare lyckas.
          </p>
          <p className={styles.teamText}>
            Vill du veta mer om vår organisation eller är intresserad av 
            att arbeta med oss? Ta gärna kontakt.
          </p>
          <Link href="/kontakt" className="btn btn-primary mt-lg">
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  );
}

