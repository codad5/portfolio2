import Link from 'next/link'
import '@/app/globals.css'
import Footer from '../../components/footer'
import { getPostMetadata } from '@/app/helpers/post'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='w-full bg-mainblue sticky top-0 h-[60px] p-4'>
            <h3 className='underline text-grey-500 h-full w-2/5 text-xl font-bold'>
              <Link href={'/'}>codad5</Link>
            </h3>
        </header>
        <main id="root">
          <article className='w-full text-center'>
            {/* a paragraph with max width of 80% on large devices but full width on small devices*/}
            <p className='w-full md:w-4/5 mx-auto text-justify text-lg text-grey-500 p-4 pt-[40px]'>
              {children}
            </p>
            
          </article>
        </main>
        <Footer />
      </body>
    </html>
  )
}
