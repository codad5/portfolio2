import Link from "next/link";
import { getPostsAndMetadata } from "../helpers/post";
import BlogFooter from "../components/shared/BlogFooter";

export default function PostLayout() {
    const posts = getPostsAndMetadata();
    const publishedPosts = posts.filter(value => value.published);
    
    return (
        <div 
            className="min-h-screen flex flex-col"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
            <main className="flex-1 py-12 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-4 pb-6 sm:pb-8">
                        <Link 
                            href="/"
                            className="font-mono text-sm uppercase tracking-wider no-underline hover:underline"
                            style={{ 
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--color-accent)' 
                            }}
                        >
                            ← Home
                        </Link>
                        <div className="flex-1" />
                    </div>

                    {/* Title */}
                    <h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold pb-2"
                        style={{ 
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-text-primary)'
                        }}
                    >
                        Blog
                    </h1>
                    <p 
                        className="text-base sm:text-lg pb-6 sm:pb-8"
                        style={{ 
                            color: 'var(--color-text-secondary)',
                            lineHeight: '1.6'
                        }}
                    >
                        Thoughts, tutorials, and insights on software development.
                    </p>

                    {/* Divider */}
                    <div 
                        className="h-px mb-6 sm:mb-8"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    {publishedPosts.length > 0 ? (
                        <div className="flex flex-col gap-6">
                            {publishedPosts.map((post, index) => (
                                <article 
                                    key={index}
                                    className="p-5 sm:p-6 border"
                                    style={{ 
                                        borderColor: 'var(--color-border)',
                                        backgroundColor: 'var(--color-bg-secondary)'
                                    }}
                                >
                                    <div className="flex flex-col gap-3">
                                        {/* Date */}
                                        <span 
                                            className="text-xs uppercase tracking-wider"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            {post.date}
                                        </span>

                                        {/* Title */}
                                        <h2 
                                            className="text-xl sm:text-2xl font-heading font-bold"
                                            style={{ 
                                                fontFamily: 'var(--font-heading)',
                                                color: 'var(--color-text-primary)'
                                            }}
                                        >
                                            <Link 
                                                href={`/posts/${post.slug}`}
                                                className="no-underline hover:underline"
                                                style={{ 
                                                    color: 'inherit',
                                                    textDecorationColor: 'var(--color-accent)'
                                                }}
                                            >
                                                {post.title}
                                            </Link>
                                        </h2>

                                        {/* Description */}
                                        <p 
                                            className="text-sm sm:text-base font-body"
                                            style={{ 
                                                fontFamily: 'var(--font-body)',
                                                color: 'var(--color-text-secondary)',
                                                lineHeight: '1.6'
                                            }}
                                        >
                                            {post.description}
                                        </p>

                                        {/* Tags */}
                                        {post.tags && (
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {(Array.isArray(post.tags) ? post.tags : [post.tags]).map((tag) => (
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
                                        <div className="pt-2">
                                            <Link
                                                href={`/posts/${post.slug}`}
                                                className="text-sm uppercase tracking-wider"
                                                style={{ color: 'var(--color-accent)' }}
                                            >
                                                Read Article →
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div 
                            className="w-full grid place-items-center h-[50vh]"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            <div className="text-center">
                                <h2 
                                    className="text-2xl sm:text-3xl font-heading font-bold pb-2"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    Coming Soon
                                </h2>
                                <p>New articles are on the way!</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Site Footer */}
            <BlogFooter />
        </div>
    )
}