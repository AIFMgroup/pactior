import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'Användarvillkor',
  description: 'Läs våra användarvillkor för Pactior Groups webbplats och tjänster.',
};

export default function Villkor() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container container-narrow">
          <div className="accent-line"></div>
          <h1>Användarvillkor</h1>
          <p className={styles.lastUpdated}>Senast uppdaterad: December 2024</p>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className="container container-narrow">
          <div className={`pulsating-box ${styles.contentBox}`}>
            <article className={styles.article}>
              <h2>1. Allmänt</h2>
              <p>
                Dessa användarvillkor (&ldquo;Villkoren&rdquo;) gäller för användning av 
                webbplatsen pactiorgroup.se och de tjänster som tillhandahålls av 
                Pactior Group AB, org.nr 559XXX-XXXX (&ldquo;Pactior Group&rdquo;, &ldquo;vi&rdquo;, 
                &ldquo;oss&rdquo; eller &ldquo;vår&rdquo;).
              </p>
              <p>
                Genom att använda vår webbplats eller våra tjänster godkänner du 
                dessa Villkor. Om du inte accepterar Villkoren ska du inte använda 
                webbplatsen eller våra tjänster.
              </p>

              <h2>2. Tjänster</h2>
              <p>
                Pactior Group och dess dotterbolag erbjuder tjänster inom 
                företagsförmedling, företagsvärdering och företagsdata. Specifika 
                villkor för respektive tjänst regleras i separata avtal.
              </p>
              <p>
                Information på denna webbplats utgör inte finansiell, juridisk 
                eller annan professionell rådgivning. Kontakta alltid en kvalificerad 
                rådgivare för specifika frågor.
              </p>

              <h2>3. Användning av webbplatsen</h2>
              <p>Du åtar dig att:</p>
              <ul className="list-styled">
                <li>Endast använda webbplatsen för lagliga ändamål</li>
                <li>Inte försöka få obehörig åtkomst till våra system</li>
                <li>Inte sprida skadlig kod eller virus</li>
                <li>Inte kopiera eller distribuera innehåll utan tillstånd</li>
                <li>Lämna korrekta och fullständiga uppgifter i formulär</li>
              </ul>

              <h2>4. Immateriella rättigheter</h2>
              <p>
                Allt innehåll på webbplatsen, inklusive men inte begränsat till 
                text, grafik, logotyper, bilder och mjukvara, ägs av Pactior Group 
                eller dess licensgivare och skyddas av upphovsrätt och andra 
                immateriella rättigheter.
              </p>
              <p>
                Du får inte utan vårt skriftliga medgivande:
              </p>
              <ul className="list-styled">
                <li>Kopiera, modifiera eller distribuera innehåll</li>
                <li>Använda våra varumärken eller logotyper</li>
                <li>Skapa derivata verk baserade på innehållet</li>
              </ul>

              <h2>5. Personuppgifter</h2>
              <p>
                Vi behandlar personuppgifter i enlighet med vår{' '}
                <Link href="/integritetspolicy">integritetspolicy</Link>. Genom 
                att använda våra tjänster godkänner du vår behandling av 
                personuppgifter enligt beskrivningen i integritetspolicyn.
              </p>

              <h2>6. Ansvarsbegränsning</h2>
              <p>
                Webbplatsen och dess innehåll tillhandahålls &ldquo;i befintligt skick&rdquo;. 
                Vi garanterar inte att webbplatsen kommer att vara felfri, 
                oavbruten eller fri från virus eller andra skadliga komponenter.
              </p>
              <p>
                I den utsträckning som tillåts enligt lag ansvarar Pactior Group 
                inte för:
              </p>
              <ul className="list-styled">
                <li>Indirekta skador, följdskador eller förlust av data</li>
                <li>Förluster orsakade av användning av information på webbplatsen</li>
                <li>Avbrott eller fel i webbplatsens funktionalitet</li>
                <li>Handlingar eller underlåtenheter från tredje part</li>
              </ul>

              <h2>7. Länkar till tredje part</h2>
              <p>
                Vår webbplats kan innehålla länkar till externa webbplatser. Vi 
                ansvarar inte för innehållet på eller tillgängligheten av dessa 
                webbplatser och rekommenderar att du läser deras villkor och 
                integritetspolicyer.
              </p>

              <h2>8. Ändringar</h2>
              <p>
                Vi förbehåller oss rätten att när som helst ändra dessa Villkor. 
                Ändringar träder i kraft när de publiceras på webbplatsen. Din 
                fortsatta användning av webbplatsen efter ändringar innebär att 
                du accepterar de uppdaterade Villkoren.
              </p>

              <h2>9. Tillämplig lag och tvister</h2>
              <p>
                Dessa Villkor ska tolkas och tillämpas i enlighet med svensk lag. 
                Tvister som uppstår i anledning av dessa Villkor ska i första 
                hand lösas genom förhandling. Om parterna inte kan komma överens 
                ska tvisten avgöras av svensk allmän domstol med Stockholms 
                tingsrätt som första instans.
              </p>

              <h2>10. Kontakt</h2>
              <p>
                Vid frågor om dessa Villkor, kontakta oss:
              </p>
              <p>
                Pactior Group AB<br />
                Strandvägen 1<br />
                114 51 Stockholm<br />
                E-post: info@pactiorgroup.se<br />
                Telefon: +46 8 123 456 78
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

