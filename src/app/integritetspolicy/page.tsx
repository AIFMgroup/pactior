import type { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Integritetspolicy',
  description: 'Läs om hur Pactior Group hanterar dina personuppgifter och vår integritetspolicy enligt GDPR.',
};

export default function Integritetspolicy() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container container-narrow">
          <div className="accent-line"></div>
          <h1>Integritetspolicy</h1>
          <p className={styles.lastUpdated}>Senast uppdaterad: December 2024</p>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className="container container-narrow">
          <div className={`pulsating-box ${styles.contentBox}`}>
            <article className={styles.article}>
              <h2>1. Inledning</h2>
              <p>
                Pactior Group AB (nedan kallat &ldquo;vi&rdquo;, &ldquo;oss&rdquo; eller &ldquo;Pactior Group&rdquo;) 
                värnar om din personliga integritet. Denna integritetspolicy förklarar hur 
                vi samlar in, använder, delar och skyddar personuppgifter i samband med 
                vår verksamhet och våra tjänster.
              </p>
              <p>
                Vi behandlar personuppgifter i enlighet med EU:s allmänna 
                dataskyddsförordning (GDPR) och annan tillämplig dataskyddslagstiftning.
              </p>

              <h2>2. Personuppgiftsansvarig</h2>
              <p>
                Pactior Group AB är personuppgiftsansvarig för behandlingen av dina 
                personuppgifter. Du kan kontakta oss på:
              </p>
              <ul className="list-styled">
                <li>E-post: privacy@pactiorgroup.se</li>
                <li>Adress: Strandvägen 1, 114 51 Stockholm</li>
                <li>Organisationsnummer: 559XXX-XXXX</li>
              </ul>

              <h2>3. Vilka personuppgifter samlar vi in?</h2>
              <p>Vi kan samla in följande kategorier av personuppgifter:</p>
              
              <h3>3.1 Kontaktuppgifter</h3>
              <ul className="list-styled">
                <li>Namn och efternamn</li>
                <li>E-postadress</li>
                <li>Telefonnummer</li>
                <li>Postadress</li>
              </ul>

              <h3>3.2 Företagsuppgifter</h3>
              <ul className="list-styled">
                <li>Företagsnamn och organisationsnummer</li>
                <li>Din roll i företaget</li>
                <li>Bransch och verksamhetsområde</li>
              </ul>

              <h3>3.3 Teknisk information</h3>
              <ul className="list-styled">
                <li>IP-adress</li>
                <li>Webbläsartyp och version</li>
                <li>Enhetstyp</li>
                <li>Besöksstatistik på vår webbplats</li>
              </ul>

              <h2>4. Hur samlar vi in personuppgifter?</h2>
              <p>Vi samlar in personuppgifter på följande sätt:</p>
              <ul className="list-styled">
                <li>När du fyller i kontaktformulär på vår webbplats</li>
                <li>När du kontaktar oss via e-post eller telefon</li>
                <li>När du blir kund hos oss eller våra dotterbolag</li>
                <li>Genom cookies och liknande tekniker på vår webbplats</li>
                <li>Från offentliga register och databaser</li>
              </ul>

              <h2>5. Ändamål med behandlingen</h2>
              <p>Vi behandlar dina personuppgifter för följande ändamål:</p>
              
              <h3>5.1 Leverans av tjänster</h3>
              <p>
                För att kunna leverera våra tjänster inom företagsförmedling, 
                värdering och dataanalys.
              </p>
              <p><strong>Rättslig grund:</strong> Fullgörande av avtal</p>

              <h3>5.2 Kommunikation</h3>
              <p>
                För att besvara förfrågningar och kommunicera med dig om våra tjänster.
              </p>
              <p><strong>Rättslig grund:</strong> Berättigat intresse eller samtycke</p>

              <h3>5.3 Marknadsföring</h3>
              <p>
                För att skicka relevant information om våra tjänster och nyheter.
              </p>
              <p><strong>Rättslig grund:</strong> Samtycke eller berättigat intresse</p>

              <h3>5.4 Förbättring av tjänster</h3>
              <p>
                För att analysera och förbättra vår webbplats och våra tjänster.
              </p>
              <p><strong>Rättslig grund:</strong> Berättigat intresse</p>

              <h2>6. Delning av personuppgifter</h2>
              <p>Vi kan dela dina personuppgifter med:</p>
              <ul className="list-styled">
                <li>Våra dotterbolag (Trestor Partners, Valiora Analytics, Vectoryx)</li>
                <li>Tjänsteleverantörer som hjälper oss att driva vår verksamhet</li>
                <li>Myndigheter när vi är skyldiga enligt lag</li>
              </ul>
              <p>
                Vi säljer aldrig dina personuppgifter till tredje part. Alla våra 
                tjänsteleverantörer är bundna av sekretessavtal och databiträdesavtal.
              </p>

              <h2>7. Lagringstid</h2>
              <p>
                Vi sparar dina personuppgifter så länge det är nödvändigt för de 
                ändamål för vilka de samlades in, eller så länge vi är skyldiga 
                enligt lag. Generellt gäller följande:
              </p>
              <ul className="list-styled">
                <li>Kunduppgifter: 10 år efter avslutat kundförhållande</li>
                <li>Kontaktförfrågningar: 2 år</li>
                <li>Marknadsföringskontakter: Till dess du avregistrerar dig</li>
                <li>Besöksstatistik: 26 månader</li>
              </ul>

              <h2>8. Dina rättigheter</h2>
              <p>Enligt GDPR har du följande rättigheter:</p>
              <ul className="list-styled">
                <li><strong>Rätt till tillgång:</strong> Du kan begära information om vilka uppgifter vi har om dig</li>
                <li><strong>Rätt till rättelse:</strong> Du kan begära att felaktiga uppgifter korrigeras</li>
                <li><strong>Rätt till radering:</strong> Du kan under vissa förutsättningar begära att dina uppgifter raderas</li>
                <li><strong>Rätt till begränsning:</strong> Du kan begära att behandlingen begränsas</li>
                <li><strong>Rätt till dataportabilitet:</strong> Du kan få ut dina uppgifter i ett maskinläsbart format</li>
                <li><strong>Rätt att invända:</strong> Du kan invända mot viss behandling av dina uppgifter</li>
              </ul>
              <p>
                För att utöva dina rättigheter, kontakta oss på privacy@pactiorgroup.se.
              </p>

              <h2>9. Säkerhet</h2>
              <p>
                Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder 
                för att skydda dina personuppgifter mot obehörig åtkomst, ändring, 
                spridning eller förstörelse.
              </p>

              <h2>10. Ändringar av policyn</h2>
              <p>
                Vi kan komma att uppdatera denna integritetspolicy. Vid väsentliga 
                ändringar kommer vi att informera dig via e-post eller genom tydlig 
                information på vår webbplats.
              </p>

              <h2>11. Klagomål</h2>
              <p>
                Om du har klagomål på vår behandling av personuppgifter har du rätt 
                att lämna in ett klagomål till Integritetsskyddsmyndigheten (IMY).
              </p>
              <p>
                Integritetsskyddsmyndigheten<br />
                Box 8114<br />
                104 20 Stockholm<br />
                imy.se
              </p>

              <h2>12. Kontakt</h2>
              <p>
                Har du frågor om vår integritetspolicy eller hur vi behandlar dina 
                personuppgifter? Kontakta oss gärna:
              </p>
              <p>
                E-post: privacy@pactiorgroup.se<br />
                Telefon: +46 8 123 456 78
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

