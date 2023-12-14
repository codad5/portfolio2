import Link from 'next/link'
import '@/app/globals.css'
import Footer from '../components/footer'
import ContactSection from '../components/sections/contact'

export const metadata = {
  title: 'Chibueze Michael Aniezeofor - Codad5',
  description: 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student.',
  generator: 'Next.js',
  applicationName: 'Codad5',
  referrer: 'origin-when-cross-origin',
  keywords: ['codad5', 'CHIBUEZE MICHAEL ANIEZEOFOR', 'Software Developer', 'Engineer', 'PHP', 'NODE', 'LARAVEL', 'REACT', 'NEXTJS', 'VUEJS', 'ANGULAR', 'MECHANICAL ENGINEERING', 'WEB DEVELOPER', 'WEB DESIGNER', 'GRAPHIC DESIGNER', 'UI/UX DESIGNER', 'MOBILE APP DEVELOPER', 'MOBILE'],
  authors: [{ name: 'Chibueze Michael Aniezeofor', url: 'https://codad5.me' }],
  // colorScheme: 'dark',
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
    description: 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exciting project.',
    url: 'https://codad5.me',
    phoneNumbers: ['+234 814 257 2488'],
    siteName: 'Codad5: A Software Enginner',
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
        width: 800,
        height: 600,
        alt: 'Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE',
      },
      {
        url: 'https://avatars.githubusercontent.com/u/66634814?v=41',
        width: 1800,
        height: 1600,
        alt: 'Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'standard',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='transition-all'>
        <header className='w-full bg-mainblue sticky top-0 h-[60px] p-4'>
            <h3 className='underline text-grey-500 h-full w-2/5 text-xl font-bold'>
              <Link href={'/'}>codad5</Link>
            </h3>
        </header>
        <main id="root" className='min-h-screen'>
            <div className='w-full text-center'>
              <p className='w-full md:w-4/5 mx-auto text-justify text-lg text-grey-500 p-4 pt-[40px]'>
                <Link href="/" className="px-4 py-2 bg-mainblue">Back</Link>
                <article className='py-4'>
                    {children}
                </article>
              </p>
            </div>
        </main>
        <hr/>
        <section>
          <ContactSection />
        </section>
        <Footer />
      </body>
    </html>
  )
}
