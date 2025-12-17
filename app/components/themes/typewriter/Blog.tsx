import Link from 'next/link';
import { postsType } from '@/app/components/types';

interface BlogProps {
  posts: postsType[];
}

function BlogCard({ post, index }: { post: postsType; index: number }) {
  return (
    <div 
      className="p-5 border-2"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* Entry header */}
      <div className="flex justify-between items-center pb-2 mb-3 border-b-2" style={{ borderColor: 'var(--color-border)' }}>
        <span 
          className="font-mono text-xs uppercase"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
        >
          ENTRY #{String(index + 1).padStart(2, '0')}
        </span>
        <span 
          className="font-mono text-xs"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}
        >
          {post.date}
        </span>
      </div>

      {/* Title */}
      <h3 
        className="text-lg font-heading font-bold uppercase tracking-wider"
        style={{ 
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-primary)'
        }}
      >
        <Link 
          href={`/posts/${post.slug}`}
          className="no-underline hover:underline"
          style={{ color: 'inherit', textDecorationStyle: 'dashed' }}
        >
          {post.title}
        </Link>
      </h3>

      {/* Description */}
      <p 
        className="font-body text-sm pt-3"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)' }}
      >
        {post.description}
      </p>

      {/* Read link */}
      <div className="pt-4">
        <Link
          href={`/posts/${post.slug}`}
          className="font-mono text-xs uppercase tracking-wider no-underline hover:underline"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}
        >
          [READ ENTRY &gt;&gt;]
        </Link>
      </div>
    </div>
  );
}

export default function Blog({ posts }: BlogProps) {
  const recentPosts = posts.filter((p) => p.published !== false).slice(0, 3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section 
      id="blog"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center gap-4 pb-6">
          <span 
            className="font-mono text-sm"
            style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}
          >
            04.
          </span>
          <h2 
            className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-widest"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            LOG_ENTRIES
          </h2>
          <div 
            className="flex-1"
            style={{ 
              borderBottom: '2px dashed var(--color-border)'
            }}
          />
          <Link
            href="/posts"
            className="font-mono text-xs uppercase tracking-widest px-3 py-2 border-2 no-underline"
            style={{ 
              fontFamily: 'var(--font-mono)',
              borderColor: 'var(--color-text-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            [ALL ENTRIES]
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
