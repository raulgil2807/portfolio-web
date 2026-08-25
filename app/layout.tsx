import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jose-raul-gil-2807.raulgil98.chatgpt.site'),
  title: 'José Raúl Gil Jiménez — Desarrollador de Software',
  description: 'Portfolio de José Raúl Gil Jiménez: desarrollo de software, soporte técnico N1 y proyectos full-stack.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'José Raúl Gil Jiménez',
    title: 'José Raúl Gil Jiménez — Desarrollo, soporte y producto',
    description: 'Desarrollo de software, soporte técnico N1 y proyectos full-stack con foco en sistemas que funcionan en producción.',
    images: [{
      url: '/og.png',
      width: 1200,
      height: 630,
      alt: 'José Raúl Gil Jiménez — Desarrollo, soporte y producto',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Raúl Gil Jiménez — Desarrollo, soporte y producto',
    description: 'Desarrollo de software, soporte técnico N1 y proyectos full-stack.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
