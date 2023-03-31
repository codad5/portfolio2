import Link from 'next/link'
import '@/app/globals.css'
import Footer from '../../components/footer'
import ContactSection from '../../components/sections/contact'

export const metadata = {
  title: 'Chibueze Michael Aniezeofor - Codad5',
  description: 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exciting project.',
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
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
    shortcut: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
    apple: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
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
      <body className='transition-all'>
        <header className='w-full bg-mainblue sticky top-0 h-[60px] p-4'>
            <h3 className='underline text-grey-500 h-full w-2/5 text-xl font-bold'>
              <Link href={'/'}>codad5</Link>
            </h3>
        </header>
        <main id="root" className='min-h-screen'>
          <div className='w-full text-center'>
            {/* a paragraph with max width of 80% on large devices but full width on small devices*/}
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
