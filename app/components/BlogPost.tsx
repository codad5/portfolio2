'use client';
import Markdown from "markdown-to-jsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import BlogFooter from "./shared/BlogFooter";

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
        <>
            <main 
                className="flex-1 py-12 px-4 sm:px-6"
                style={{ backgroundColor: 'var(--color-bg-primary)' }}
            >
                <div className="max-w-3xl mx-auto">
                    {/* Back link */}
                    <div className="pb-6 sm:pb-8">
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
                    <header className="pb-6 sm:pb-8">
                        {/* Date */}
                        <span 
                            className="text-xs uppercase tracking-wider"
                            style={{ color: 'var(--color-text-muted)' }}
                        >
                            {date}
                        </span>

                        {/* Title */}
                        <h1 
                            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold pt-3 pb-4 leading-tight"
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
                        className="h-px mb-6 sm:mb-8"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    {/* Featured image */}
                    {image && (
                        <div 
                            className="mb-6 sm:mb-8 border"
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
                        className="prose prose-base sm:prose-lg w-full max-w-none blog-content"
                        style={{ 
                            fontFamily: 'var(--font-body)',
                            color: 'var(--color-text-primary)',
                            lineHeight: '1.8',
                            ['--tw-prose-body' as string]: 'var(--color-text-primary)',
                            ['--tw-prose-headings' as string]: 'var(--color-text-primary)',
                            ['--tw-prose-links' as string]: 'var(--color-accent)',
                            ['--tw-prose-bold' as string]: 'var(--color-text-primary)',
                            ['--tw-prose-quotes' as string]: 'var(--color-text-secondary)',
                            ['--tw-prose-quote-borders' as string]: 'var(--color-accent)',
                            ['--tw-prose-code' as string]: 'var(--color-accent)',
                            ['--tw-prose-pre-bg' as string]: 'var(--color-bg-tertiary)',
                            ['--tw-prose-pre-code' as string]: 'var(--color-text-primary)',
                            ['--tw-prose-hr' as string]: 'var(--color-border)',
                        }}
                    >
                        <Markdown>{children}</Markdown>
                    </article>

                    {/* Bottom navigation */}
                    <div 
                        className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
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

            {/* Site Footer */}
            <BlogFooter />

            {/* Theme-aware code block styling */}
            <style jsx global>{`
                .blog-content pre {
                    background-color: var(--color-bg-tertiary) !important;
                    border: 1px solid var(--color-border);
                    border-radius: 0;
                    padding: 1rem;
                    overflow-x: auto;
                }
                
                .blog-content code {
                    font-family: var(--font-mono);
                    font-size: 0.875em;
                }
                
                .blog-content :not(pre) > code {
                    background-color: var(--color-bg-secondary);
                    color: var(--color-accent);
                    padding: 0.2em 0.4em;
                    border: 1px solid var(--color-border-light);
                }
                
                .blog-content blockquote {
                    border-left: 4px solid var(--color-accent);
                    padding-left: 1rem;
                    font-style: italic;
                    color: var(--color-text-secondary);
                }
                
                .blog-content h2, .blog-content h3, .blog-content h4 {
                    font-family: var(--font-heading);
                    margin-top: 2em;
                    margin-bottom: 0.5em;
                }
                
                .blog-content p {
                    margin-bottom: 1.5em;
                    line-height: 1.8;
                }
                
                .blog-content ul, .blog-content ol {
                    margin-bottom: 1.5em;
                    padding-left: 1.5em;
                }
                
                .blog-content li {
                    margin-bottom: 0.5em;
                }
                
                .blog-content a {
                    color: var(--color-accent);
                    text-decoration: underline;
                    text-decoration-style: dashed;
                }
                
                .blog-content a:hover {
                    text-decoration-style: solid;
                }

                /* Dark code theme for newspaper (light bg) */
                [data-theme="newspaper"] .hljs {
                    background: var(--color-bg-tertiary);
                    color: #1e293b;
                }
                
                /* Light code theme for typewriter (aged paper bg) */
                [data-theme="typewriter"] .hljs {
                    background: var(--color-bg-tertiary);
                    color: #3c2415;
                }
            `}</style>
        </>
    )
}