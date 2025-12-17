import { Playfair_Display, Source_Serif_4, Courier_Prime } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from '@/app/providers/theme-provider';
import '@/app/globals.css';

// Font configurations
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
  weight: ['400', '500', '600', '700'],
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-courier',
  weight: ['400', '700'],
});

export const metadata = {
  title: "Chibueze Aniezeofor | Software Engineer",
  description:
    "Software Engineer with 6+ years of experience building scalable backend systems, developer tools, and AI-driven products. Passionate about systems architecture and performance optimization.",
  generator: "Next.js",
  applicationName: "Codad5 Portfolio",
  metadataBase: new URL('https://codad5.me'),
  keywords: [
    "Chibueze Aniezeofor",
    "codad5",
    "Software Engineer",
    "Backend Developer",
    "TypeScript",
    "PHP",
    "Rust",
    "Node.js",
    "Laravel",
    "Next.js",
    "AI Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Chibueze Aniezeofor", url: "https://codad5.me" }],
  creator: "Chibueze Aniezeofor",
  publisher: "Chibueze Aniezeofor",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Chibueze Aniezeofor | Software Engineer",
    description:
      "Software Engineer with 6+ years of experience building scalable backend systems, developer tools, and AI-driven products.",
    url: "https://codad5.me",
    siteName: "Codad5",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/66634814?v=4",
        width: 800,
        height: 800,
        alt: "Chibueze Aniezeofor - Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibueze Aniezeofor | Software Engineer",
    description: "Software Engineer with 6+ years of experience",
    creator: "@codad5_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default theme from env or fallback to 'newspaper'
  const defaultTheme = process.env.NEXT_PUBLIC_THEME || 'newspaper';
  
  return (
    <html 
      lang="en" 
      data-theme={defaultTheme}
      className={`${playfairDisplay.variable} ${sourceSerif.variable} ${courierPrime.variable}`}
    >
      <body>
        <ThemeProvider>
          <div id="root">
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
