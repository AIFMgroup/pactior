import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nyheter',
  description: 'Senaste nyheterna och insikterna från Pactior Group om företagsförmedling, värdering och finansmarknaden.',
};

const newsItems = [
  {
    id: 1,
    date: '2024-12-01',
    category: 'Pactior Group',
    title: 'Pactior Group lanserar ny webbplats',
    excerpt: 'Vi är stolta över att presentera vår helt nya webbplats med fokus på att göra det enklare för företagare att hitta rätt tjänster.',
    featured: true,
  },
  {
    id: 2,
    date: '2024-11-15',
    category: 'Trestor Partners',
    title: 'Trestor Partners genomför framgångsrik försäljning inom techsektorn',
    excerpt: 'Ännu en lyckad affär där vi hjälpt en techentreprenör att hitta den perfekta köparen för sitt bolag.',
    featured: false,
  },
  {
    id: 3,
    date: '2024-11-01',
    category: 'Branschinsikt',
    title: 'Marknaden för företagsförsäljningar Q3 2024',
    excerpt: 'En genomgång av trender och utveckling på marknaden för företagsförsäljningar under tredje kvartalet.',
    featured: false,
  },
  {
    id: 4,
    date: '2024-10-20',
    category: 'Valiora Analytics',
    title: 'Valiora Analytics planeras lanseras 2026',
    excerpt: 'Vi förbereder lanseringen av vår nya värderingstjänst som kombinerar AI-driven analys med mänsklig expertis.',
    featured: false,
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Nyheter() {
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="accent-line"></div>
          <h1>Nyheter</h1>
          <p className={styles.heroSubtitle}>
            Senaste nytt från Pactior Group och våra bolag
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className={`section ${styles.featured}`}>
          <div className="container">
            <div className={`pulsating-box ${styles.featuredCard}`}>
              <span className={styles.featuredBadge}>Senaste</span>
              <div className={styles.featuredContent}>
                <div className={styles.newsMeta}>
                  <span className={styles.newsCategory}>{featuredNews.category}</span>
                  <span className={styles.newsDate}>{formatDate(featuredNews.date)}</span>
                </div>
                <h2>{featuredNews.title}</h2>
                <p>{featuredNews.excerpt}</p>
                <Link href={`/nyheter/${featuredNews.id}`} className={styles.readMore}>
                  Läs mer
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className={`section ${styles.newsGrid}`}>
        <div className="container">
          <div className={styles.grid}>
            {otherNews.map((item) => (
              <article key={item.id} className={`pulsating-box ${styles.newsCard}`}>
                <div className={styles.newsMeta}>
                  <span className={styles.newsCategory}>{item.category}</span>
                  <span className={styles.newsDate}>{formatDate(item.date)}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link href={`/nyheter/${item.id}`} className={styles.readMore}>
                  Läs mer
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={`section section-dark ${styles.newsletter}`}>
        <div className="container text-center">
          <h2>Prenumerera på vårt nyhetsbrev</h2>
          <p className={styles.newsletterText}>
            Få de senaste nyheterna, insikterna och analyserna direkt i din inkorg.
          </p>
          <form className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Din e-postadress" 
              required 
            />
            <button type="submit" className="btn btn-primary">
              Prenumerera
            </button>
          </form>
          <p className={styles.newsletterDisclaimer}>
            Vi respekterar din integritet. Läs vår{' '}
            <Link href="/integritetspolicy">integritetspolicy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

