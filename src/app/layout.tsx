
import './globals.css'

export const metadata = {
  title: 'Chibueze Michael Aniezeofor - Codad5',
  description: 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exicting project.',
  generator: 'Next.js',
  applicationName: 'Codad5',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'codad5','CHIBUEZE MICHAEL ANIEZEOFOR', 'Software Developer', 'Engineer', 'PHP', 'NODE', 'LARAVEL', 'REACT', 'NEXTJS', 'VUEJS', 'ANGULAR', 'MECHANICAL ENGINEERING', 'WEB DEVELOPER', 'WEB DESIGNER', 'GRAPHIC DESIGNER', 'UI/UX DESIGNER', 'MOBILE APP DEVELOPER', 'MOBILE'],
  authors: [{ name: 'Chibueze Michael Aniezeofor', url: 'https://codad5.me' }],
  colorScheme: 'dark',
  creator: 'Chibueze Michael Aniezeofor',
  publisher: 'Chibueze Michael Aniezeofor',
  alternates: {},
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CHibeze Michael Aniezeofor - Codad5',
    description: 'The React Framework for the Web',
    url: 'https://codad5.me',
    siteName: 'Codad5: A Software Enginner',
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
        width: 1800,
        height: 1600,
        alt: 'Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      {/* <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exicting project." />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aniezeofor Chibueze Michael - Codad5 - Software Developer" />
        <meta property="og:description" content="Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exicting project." />
        <meta property="og:url" content="httpa://codad5.vercel.app" />
        <meta property="og:site_name" content="Codad5: A Software Enginner" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE" />
        <meta name="twitter:description" content="Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exicting project." />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg" />
        <meta name="theme-color" content="#141414" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Chibueze Michael Aniezeofor - Codad5</title>
        
      </Head> */}
      <body>{children}</body>
    </html>
  )
}
