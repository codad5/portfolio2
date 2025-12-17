import Link from 'next/link';
import { postsType } from '@/app/components/types';

interface BlogProps {
  posts: postsType[];
}

function BlogCard({ post }: { post: postsType }) {
  return (
    <article 
      className="flex flex-col gap-3 p-6 border"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-bg-primary)'
      }}
    >
      {/* Date */}
      <span 
        className="text-xs uppercase tracking-wider"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {post.date}
      </span>

      {/* Title */}
      <h3 
        className="text-xl font-heading font-bold"
        style={{ 
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-primary)'
        }}
      >
        <Link 
          href={`/posts/${post.slug}`}
          className="hover:underline no-underline"
          style={{ color: 'inherit', textDecorationColor: 'var(--color-accent)' }}
        >
          {post.title}
        </Link>
      </h3>

      {/* Description */}
      <p 
        className="text-sm flex-1"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {post.description}
      </p>

      {/* Tags */}
      {post.tags && (
        <div className="flex flex-wrap gap-2">
          {(Array.isArray(post.tags) ? post.tags : [post.tags]).slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 border"
              style={{ 
                borderColor: 'var(--color-border-light)',
                color: 'var(--color-text-muted)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Read more */}
      <div 
        className="pt-2 border-t"
        style={{ borderColor: 'var(--color-border-light)' }}
      >
        <Link
          href={`/posts/${post.slug}`}
          className="text-sm uppercase tracking-wider"
          style={{ color: 'var(--color-accent)' }}
        >
          Read Article →
        </Link>
      </div>
    </article>
  );
}

export default function Blog({ posts }: BlogProps) {
  // Filter to only published posts and take the first 3
  const recentPosts = posts.filter((p) => p.published !== false).slice(0, 3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <section 
      id="blog"
      className="w-full py-12 px-6"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 pb-6">
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            Latest Articles
          </h2>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          />
          <Link
            href="/posts"
            className="px-4 py-2 text-sm uppercase tracking-wider border no-underline"
            style={{ 
              borderColor: 'var(--color-text-primary)',
              color: 'var(--color-text-primary)',
              backgroundColor: 'transparent'
            }}
          >
            View All
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
