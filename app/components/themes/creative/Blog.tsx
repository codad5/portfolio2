import Link from 'next/link';
import { postsType } from '@/app/components/types';

interface BlogProps {
  posts: postsType[];
}

function BlogCard({ post }: { post: postsType }) {
  return (
    <article 
      className="flex flex-col gap-4 p-6 rounded-2xl"
      style={{ 
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)'
      }}
    >
      {/* Date and reading time */}
      <div className="flex items-center gap-4">
        <span 
          className="text-sm"
          style={{ color: 'var(--color-accent)' }}
        >
          {post.date}
        </span>
        <span 
          className="text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          • 5 min read
        </span>
      </div>

      {/* Title */}
      <h3 
        className="text-xl"
        style={{ 
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-text-primary)'
        }}
      >
        <Link 
          href={`/posts/${post.slug}`}
          className="no-underline"
          style={{ color: 'inherit' }}
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
              className="text-xs px-3 py-1 rounded-full"
              style={{ 
                backgroundColor: 'var(--color-bg-tertiary)',
                color: 'var(--color-text-muted)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Read more link */}
      <Link
        href={`/posts/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm no-underline"
        style={{ color: 'var(--color-accent)' }}
      >
        Read more <span>→</span>
      </Link>
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
      className="w-full px-6 lg:px-12 py-16 lg:py-24"
      style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)'
            }}
          >
            Latest<br/>
            <span style={{ fontStyle: 'italic' }}>Articles</span>
          </h2>
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm no-underline"
            style={{ 
              border: '2px solid var(--color-text-primary)',
              color: 'var(--color-text-primary)'
            }}
          >
            View All <span>↗</span>
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
