import Footer from '../components/shared/Footer';

export const metadata = {
  title: 'Blog - Chibueze Aniezeofor',
  description: 'Thoughts, tutorials, and insights on software development by Chibueze Aniezeofor.',
  generator: 'Next.js',
  applicationName: 'Codad5',
  referrer: 'origin-when-cross-origin',
  keywords: ['codad5', 'blog', 'software development', 'tutorials', 'web development', 'CHIBUEZE MICHAEL ANIEZEOFOR'],
  authors: [{ name: 'Chibueze Michael Aniezeofor', url: 'https://codad5.me' }],
  creator: 'Chibueze Michael Aniezeofor',
  publisher: 'Chibueze Michael Aniezeofor',
  openGraph: {
    title: 'Blog - Chibueze Aniezeofor',
    description: 'Thoughts, tutorials, and insights on software development.',
    url: 'https://codad5.me/posts',
    siteName: 'Codad5: A Software Engineer',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
}

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div 
      className="min-h-screen flex flex-col max-w-[100vw] overflow-x-hidden"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      {/* Main content */}
      <div className="flex-1">
        {children}
      </div>
      
      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
