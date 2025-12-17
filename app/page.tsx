import { Hero, About, Experience, Projects, Contact, Footer } from '@/app/components/themes/newspaper';

export default function Home() {
  return (
    <main 
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
