import ThemedPage from '@/app/components/ThemedPage';
import { getPostsAndMetadata } from '@/app/helpers/post';

export default function Home() {
  // Fetch posts on the server
  const posts = getPostsAndMetadata();

  return (
    <main 
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <ThemedPage posts={posts} />
    </main>
  );
}
