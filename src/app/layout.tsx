import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Pactior Group - Finansiella tjänster för framtidens företagare',
    template: '%s | Pactior Group',
  },
  description: 'Pactior Group hjälper företagare att få en enklare vardag genom företagsförmedling, värdering och dataanalys. Vi kombinerar AI med mänsklig expertis.',
  keywords: ['företagsförmedling', 'företagsvärdering', 'fintech', 'Sverige', 'Stockholm', 'Trestor', 'Valiora', 'Vectoryx'],
  authors: [{ name: 'Pactior Group' }],
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    siteName: 'Pactior Group',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

