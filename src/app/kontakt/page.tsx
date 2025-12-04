import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontakta Pactior Group för frågor om företagsförmedling, värdering eller våra andra tjänster. Vi finns i Stockholm och hjälper företagare över hela Sverige.',
};

export default function Kontakt() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="accent-line"></div>
          <h1>Kontakta oss</h1>
          <p className={styles.heroSubtitle}>
            Vi ser fram emot att höra från dig
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={`pulsating-box ${styles.formBox}`}>
              <h2>Skicka ett meddelande</h2>
              <p className={styles.formIntro}>
                Fyll i formuläret nedan så återkommer vi inom 24 timmar.
              </p>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">Förnamn</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Efternamn</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      required 
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-post</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company">Företag</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Ärende</label>
                  <select id="subject" name="subject" required>
                    <option value="">Välj ärende</option>
                    <option value="trestor">Företagsförmedling (Trestor)</option>
                    <option value="valiora">Företagsvärdering (Valiora)</option>
                    <option value="vectoryx">Företagsdata (Vectoryx)</option>
                    <option value="general">Allmän förfrågan</option>
                    <option value="career">Karriär</option>
                    <option value="other">Övrigt</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Meddelande</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required
                    placeholder="Beskriv ditt ärende..."
                  ></textarea>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="privacy" required />
                    <span>
                      Jag godkänner att Pactior Group behandlar mina personuppgifter 
                      enligt <a href="/integritetspolicy">integritetspolicyn</a>.
                    </span>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Skicka meddelande
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoColumn}>
              <div className={`pulsating-box ${styles.infoBox}`}>
                <h3>Kontaktuppgifter</h3>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>E-post</span>
                  <a href="mailto:info@pactiorgroup.se">info@pactiorgroup.se</a>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Telefon</span>
                  <a href="tel:+46812345678">+46 8 123 456 78</a>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Adress</span>
                  <span>
                    Pactior Group AB<br />
                    Strandvägen 1<br />
                    114 51 Stockholm
                  </span>
                </div>
              </div>

              <div className={`pulsating-box ${styles.infoBox}`}>
                <h3>Öppettider</h3>
                <div className={styles.hours}>
                  <div className={styles.hoursRow}>
                    <span>Måndag - Fredag</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className={styles.hoursRow}>
                    <span>Lördag - Söndag</span>
                    <span>Stängt</span>
                  </div>
                </div>
                <p className={styles.hoursNote}>
                  Vi svarar på e-post inom 24 timmar under vardagar.
                </p>
              </div>

              <div className={`pulsating-box ${styles.infoBox}`}>
                <h3>Direktkontakt</h3>
                <p>
                  Vill du komma direkt till rätt person? Välj tjänst nedan:
                </p>
                <div className={styles.directLinks}>
                  <a 
                    href="https://trestor.se/kontakt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.directLink}
                  >
                    <span className={styles.directLinkTitle}>Trestor Partners</span>
                    <span className={styles.directLinkDesc}>Företagsförmedling</span>
                  </a>
                  <div className={`${styles.directLink} ${styles.directLinkDisabled}`}>
                    <span className={styles.directLinkTitle}>Valiora Analytics</span>
                    <span className={styles.directLinkDesc}>Kommer snart</span>
                  </div>
                  <div className={`${styles.directLink} ${styles.directLinkDisabled}`}>
                    <span className={styles.directLinkTitle}>Vectoryx</span>
                    <span className={styles.directLinkDesc}>Kommer snart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`section ${styles.faq}`}>
        <div className="container container-narrow">
          <div className="text-center mb-xl">
            <div className="accent-line accent-line-center"></div>
            <h2>Vanliga frågor</h2>
          </div>
          <div className={styles.faqList}>
            <div className={`pulsating-box ${styles.faqItem}`}>
              <h4>Hur lång tid tar en företagsförsäljning?</h4>
              <p>
                En typisk försäljningsprocess tar mellan 6-12 månader från start 
                till avslut, beroende på företagets storlek och komplexitet. Vi 
                hjälper dig att förbereda företaget och hitta rätt köpare.
              </p>
            </div>
            <div className={`pulsating-box ${styles.faqItem}`}>
              <h4>Kostar det något att få en första bedömning?</h4>
              <p>
                Nej, första konsultationen är alltid kostnadsfri och 
                förutsättningslös. Vi diskuterar din situation och ger dig en 
                första bedömning av vad vi kan hjälpa dig med.
              </p>
            </div>
            <div className={`pulsating-box ${styles.faqItem}`}>
              <h4>Hur garanteras sekretessen?</h4>
              <p>
                Vi tar sekretess på största allvar. Alla potentiella köpare 
                signerar sekretessavtal innan de får ta del av känslig information 
                om ditt företag. Din identitet skyddas genom hela processen.
              </p>
            </div>
            <div className={`pulsating-box ${styles.faqItem}`}>
              <h4>Arbetar ni med företag i hela Sverige?</h4>
              <p>
                Ja, vi arbetar med företag över hela Sverige. Huvudkontoret ligger 
                i Stockholm men vi genomför möten både fysiskt och digitalt efter 
                kundens önskemål.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

