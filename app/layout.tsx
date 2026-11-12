import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Newtech Ply & Boards | Precision Plywood Manufacturer | Perumbavoor, Kerala',
  description:
    'Manufacturer of premium Commercial, Hardwood, BWR, and Marine IS:710 Plywood in Perumbavoor, Kerala. Direct mill supply, zero core gap, calibrated thickness.',
  keywords: [
    'Plywood manufacturer Kerala',
    'Perumbavoor plywood mill',
    'Marine plywood IS 710',
    'BWR plywood',
    'Shuttering plywood',
    'Newtech Ply & Boards',
    'Newply',
  ],
  authors: [{ name: 'Newtech Ply & Boards' }],
  icons: {
    icon: '/img/favicon.ico',
    apple: '/img/icon/icon-10.png',
  },
  openGraph: {
    title: 'Newtech Ply & Boards | Precision Plywood Manufacturer',
    description:
      'Two decades of precision plywood manufacturing in Perumbavoor, Kerala. Certified IS:303 & IS:710 compliance for interior and structural construction.',
    url: 'https://www.newply.org/',
    siteName: 'Newtech Ply & Boards',
    images: [
      {
        url: '/img/carousel-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Newtech Ply & Boards Mill',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        {/* Bootstrap 5 Bundle for dropdowns & modals */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          async
        />
      </body>
    </html>
  );
}
