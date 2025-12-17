'use client';
import Markdown from "markdown-to-jsx";
import dynamic from "next/dynamic";
import Link from "next/link";

const HighlightHelper = dynamic(
    () => {
        return import('../helpers/highlighter')
    },
    { ssr: false }
);

export default function BlogPost({title, slug, date, tags, image, description, children} : {
    title: string,
    slug: string,
    date: string,
    tags: string|string[],
    image?: string,
    description:string,
    children: any
}) {
    const tagArray = Array.isArray(tags) ? tags : tags ? [tags] : [];

    return (
        <main 
            className="min-h-screen py-12 px-6"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
            <div className="max-w-4xl mx-auto">
                {/* Back link */}
                <div className="pb-8">
                    <Link 
                        href="/posts"
                        className="font-mono text-sm uppercase tracking-wider no-underline hover:underline"
                        style={{ 
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--color-accent)' 
                        }}
                    >
                        ← All Articles
                    </Link>
                </div>

                {/* Article header */}
                <header className="pb-8">
                    {/* Date */}
                    <span 
                        className="text-xs uppercase tracking-wider"
                        style={{ color: 'var(--color-text-muted)' }}
                    >
                        {date}
                    </span>

                    {/* Title */}
                    <h1 
                        className="text-4xl md:text-5xl font-heading font-bold pt-3 pb-4"
                        style={{ 
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-text-primary)'
                        }}
                    >
                        {title ?? slug}
                    </h1>

                    {/* Tags */}
                    {tagArray.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tagArray.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 border"
                                    style={{ 
                                        borderColor: 'var(--color-border)',
                                        color: 'var(--color-text-muted)'
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {/* Divider */}
                <div 
                    className="h-px mb-8"
                    style={{ backgroundColor: 'var(--color-border)' }}
                />

                {/* Featured image */}
                {image && (
                    <div 
                        className="mb-8 border"
                        style={{ borderColor: 'var(--color-border)' }}
                    >
                        <img 
                            src={image} 
                            alt={`${tagArray.join(', ')} - ${description}`} 
                            className="w-full max-h-96 object-cover"
                        />
                    </div>
                )}

                {/* Code highlighting */}
                <HighlightHelper />

                {/* Article content with themed prose */}
                <article 
                    className="prose prose-base sm:prose lg:prose-lg xl:prose-xl w-full max-w-none"
                    style={{ 
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-text-primary)',
                        ['--tw-prose-body' as string]: 'var(--color-text-primary)',
                        ['--tw-prose-headings' as string]: 'var(--color-text-primary)',
                        ['--tw-prose-links' as string]: 'var(--color-accent)',
                        ['--tw-prose-bold' as string]: 'var(--color-text-primary)',
                        ['--tw-prose-quotes' as string]: 'var(--color-text-secondary)',
                        ['--tw-prose-code' as string]: 'var(--color-text-primary)',
                        ['--tw-prose-pre-bg' as string]: 'var(--color-bg-tertiary)',
                    }}
                >
                    <Markdown>{children}</Markdown>
                </article>

                {/* Footer */}
                <div 
                    className="mt-12 pt-8 border-t flex justify-between items-center"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <Link 
                        href="/posts"
                        className="font-mono text-sm uppercase tracking-wider no-underline hover:underline"
                        style={{ 
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--color-accent)' 
                        }}
                    >
                        ← Back to Blog
                    </Link>
                    <Link 
                        href="/"
                        className="font-mono text-sm uppercase tracking-wider no-underline hover:underline"
                        style={{ 
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--color-text-muted)' 
                        }}
                    >
                        Home
                    </Link>
                </div>
            </div>
        </main>
    )
}