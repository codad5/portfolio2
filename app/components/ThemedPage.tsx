'use client';

import { useTheme } from '@/app/providers/theme-provider';
import { Hero as NewspaperHero, About as NewspaperAbout, Experience as NewspaperExperience, Projects as NewspaperProjects, Blog as NewspaperBlog, Contact as NewspaperContact } from '@/app/components/themes/newspaper';
import { Hero as TypewriterHero, About as TypewriterAbout, Experience as TypewriterExperience, Projects as TypewriterProjects, Blog as TypewriterBlog, Contact as TypewriterContact } from '@/app/components/themes/typewriter';
import { Hero as CreativeHero, About as CreativeAbout, Experience as CreativeExperience, Projects as CreativeProjects, Blog as CreativeBlog, Contact as CreativeContact } from '@/app/components/themes/creative';
import { postsType } from '@/app/components/types';
import Footer from '@/app/components/shared/Footer';

interface ThemedPageProps {
  posts: postsType[];
}

export default function ThemedPage({ posts }: ThemedPageProps) {
  const { theme } = useTheme();

  if (theme === 'creative') {
    return (
      <>
        <CreativeHero />
        <CreativeAbout />
        <CreativeExperience />
        <CreativeProjects />
        <CreativeBlog posts={posts} />
        <CreativeContact />
        <Footer />
      </>
    );
  }

  if (theme === 'typewriter') {
    return (
      <>
        <TypewriterHero />
        <TypewriterAbout />
        <TypewriterExperience />
        <TypewriterProjects />
        <TypewriterBlog posts={posts} />
        <TypewriterContact />
        <Footer />
      </>
    );
  }

  // Default: newspaper theme
  return (
    <>
      <NewspaperHero />
      <NewspaperAbout />
      <NewspaperExperience />
      <NewspaperProjects />
      <NewspaperBlog posts={posts} />
      <NewspaperContact />
      <Footer />
    </>
  );
}

