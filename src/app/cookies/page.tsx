import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Cookies',
  description: 'Information om hur Pactior Group använder cookies och liknande tekniker på vår webbplats.',
};

export default function Cookies() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container container-narrow">
          <div className="accent-line"></div>
          <h1>Cookiepolicy</h1>
          <p className={styles.lastUpdated}>Senast uppdaterad: December 2024</p>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className="container container-narrow">
          <div className={`pulsating-box ${styles.contentBox}`}>
            <article className={styles.article}>
              <h2>1. Vad är cookies?</h2>
              <p>
                Cookies är små textfiler som lagras på din enhet (dator, surfplatta 
                eller mobiltelefon) när du besöker en webbplats. Cookies används 
                för att webbplatsen ska fungera korrekt, för att samla in statistik 
                och för att ge dig en bättre upplevelse.
              </p>

              <h2>2. Hur vi använder cookies</h2>
              <p>
                På pactiorgroup.se använder vi cookies för följande ändamål:
              </p>

              <h3>2.1 Nödvändiga cookies</h3>
              <p>
                Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. 
                De kan inte stängas av. Exempel på funktioner:
              </p>
              <ul className="list-styled">
                <li>Komma ihåg inställningar du gjort</li>
                <li>Säkerhetsfunktioner</li>
                <li>Hantering av sessioner</li>
              </ul>

              <h3>2.2 Statistik och analys</h3>
              <p>
                Vi använder analysverktyg för att förstå hur besökare använder vår 
                webbplats. Detta hjälper oss att förbättra webbplatsen. Informationen 
                är anonymiserad och kan inte kopplas till dig personligen.
              </p>
              <ul className="list-styled">
                <li>Antal besökare och sidvisningar</li>
                <li>Hur besökare navigerar på webbplatsen</li>
                <li>Vilka sidor som är mest populära</li>
                <li>Teknisk information om enheter och webbläsare</li>
              </ul>

              <h3>2.3 Funktionella cookies</h3>
              <p>
                Dessa cookies möjliggör förbättrad funktionalitet och 
                personalisering. Om du inte tillåter dessa cookies kan vissa 
                funktioner påverkas.
              </p>
              <ul className="list-styled">
                <li>Sparade formuläruppgifter</li>
                <li>Språkinställningar</li>
                <li>Anpassat innehåll</li>
              </ul>

              <h2>3. Vilka cookies använder vi?</h2>
              <p>Nedan listas de cookies som kan användas på vår webbplats:</p>

              <h3>Nödvändiga cookies</h3>
              <ul className="list-styled">
                <li><strong>session_id</strong> - Hanterar din session, raderas när du stänger webbläsaren</li>
                <li><strong>cookie_consent</strong> - Sparar ditt cookie-samtycke, 1 år</li>
              </ul>

              <h3>Analyscookies</h3>
              <ul className="list-styled">
                <li><strong>_ga</strong> - Google Analytics, skiljer användare åt, 2 år</li>
                <li><strong>_gid</strong> - Google Analytics, skiljer användare åt, 24 timmar</li>
                <li><strong>_gat</strong> - Google Analytics, begränsar förfrågningar, 1 minut</li>
              </ul>

              <h2>4. Hur du hanterar cookies</h2>
              <p>
                Du kan kontrollera och hantera cookies på flera sätt:
              </p>

              <h3>4.1 Via din webbläsare</h3>
              <p>
                De flesta webbläsare låter dig se vilka cookies som finns lagrade, 
                radera enskilda cookies eller blockera cookies från specifika eller 
                alla webbplatser. Observera att om du blockerar alla cookies kan 
                vissa funktioner på webbplatsen sluta fungera.
              </p>
              <ul className="list-styled">
                <li>Chrome: Inställningar &gt; Sekretess och säkerhet &gt; Cookies</li>
                <li>Firefox: Inställningar &gt; Sekretess och säkerhet</li>
                <li>Safari: Inställningar &gt; Sekretess</li>
                <li>Edge: Inställningar &gt; Sekretess, sökning och tjänster</li>
              </ul>

              <h3>4.2 Opt-out från Google Analytics</h3>
              <p>
                Du kan välja bort Google Analytics genom att installera Googles 
                webbläsartillägg: tools.google.com/dlpage/gaoptout
              </p>

              <h2>5. Tredjepartscookies</h2>
              <p>
                Vissa cookies sätts av tredjepartstjänster som vi använder på vår 
                webbplats. Vi har begränsad kontroll över dessa cookies. Vi 
                rekommenderar att du läser respektive tredje parts integritetspolicy:
              </p>
              <ul className="list-styled">
                <li>Google Analytics: policies.google.com/privacy</li>
              </ul>

              <h2>6. Uppdateringar av denna policy</h2>
              <p>
                Vi kan uppdatera denna cookiepolicy för att återspegla ändringar i 
                vår användning av cookies eller av andra operativa, juridiska eller 
                regulatoriska skäl. Vi uppmuntrar dig att regelbundet granska denna 
                sida för den senaste informationen.
              </p>

              <h2>7. Kontakt</h2>
              <p>
                Har du frågor om hur vi använder cookies? Kontakta oss:
              </p>
              <p>
                E-post: privacy@pactiorgroup.se<br />
                Telefon: +46 8 123 456 78
              </p>
              <p>
                Mer information om hur vi behandlar personuppgifter finns i vår{' '}
                <Link href="/integritetspolicy">integritetspolicy</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

