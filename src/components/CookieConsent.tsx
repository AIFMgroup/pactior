'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay before showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setIsVisible(false);
  };

  const savePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(savedPreferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.banner}>
        {!showSettings ? (
          <>
            <div className={styles.content}>
              <h3>Vi värnar om din integritet</h3>
              <p>
                Vi använder cookies för att förbättra din upplevelse på vår webbplats, 
                analysera trafik och visa relevant innehåll. Du kan välja att acceptera 
                alla cookies eller anpassa dina inställningar.
              </p>
              <p className={styles.policyLink}>
                Läs mer i vår <Link href="/cookies">cookiepolicy</Link> och{' '}
                <Link href="/integritetspolicy">integritetspolicy</Link>.
              </p>
            </div>
            <div className={styles.actions}>
              <button 
                onClick={acceptNecessary} 
                className={styles.btnSecondary}
              >
                Endast nödvändiga
              </button>
              <button 
                onClick={() => setShowSettings(true)} 
                className={styles.btnSecondary}
              >
                Anpassa
              </button>
              <button 
                onClick={acceptAll} 
                className={styles.btnPrimary}
              >
                Acceptera alla
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.content}>
              <h3>Cookie-inställningar</h3>
              <p>
                Välj vilka typer av cookies du vill tillåta. Nödvändiga cookies 
                kan inte stängas av då de krävs för att webbplatsen ska fungera.
              </p>
              
              <div className={styles.settings}>
                <div className={styles.settingItem}>
                  <div className={styles.settingInfo}>
                    <span className={styles.settingName}>Nödvändiga cookies</span>
                    <span className={styles.settingDesc}>
                      Krävs för grundläggande funktionalitet som navigation och säkerhet.
                    </span>
                  </div>
                  <label className={styles.toggle}>
                    <input 
                      type="checkbox" 
                      checked={preferences.necessary} 
                      disabled 
                    />
                    <span className={`${styles.slider} ${styles.disabled}`}></span>
                  </label>
                </div>

                <div className={styles.settingItem}>
                  <div className={styles.settingInfo}>
                    <span className={styles.settingName}>Analyscookies</span>
                    <span className={styles.settingDesc}>
                      Hjälper oss förstå hur besökare använder webbplatsen för att förbättra den.
                    </span>
                  </div>
                  <label className={styles.toggle}>
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        analytics: e.target.checked
                      })}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <div className={styles.settingItem}>
                  <div className={styles.settingInfo}>
                    <span className={styles.settingName}>Funktionella cookies</span>
                    <span className={styles.settingDesc}>
                      Möjliggör förbättrad funktionalitet som sparade formulärdata.
                    </span>
                  </div>
                  <label className={styles.toggle}>
                    <input 
                      type="checkbox" 
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        functional: e.target.checked
                      })}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <button 
                onClick={() => setShowSettings(false)} 
                className={styles.btnSecondary}
              >
                Tillbaka
              </button>
              <button 
                onClick={savePreferences} 
                className={styles.btnPrimary}
              >
                Spara inställningar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

