'use client';

import Markdown from 'markdown-to-jsx';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// HighlightHelper is client-side only
const HighlightHelper = dynamic(
    () => import('@/app/helpers/highlighter'),
    { ssr: false }
);

interface ResumeContentProps {
    content: string;
    pdfLink: string;
}

export default function ResumeContent({ content, pdfLink }: ResumeContentProps) {
    return (
        <div className="max-w-3xl mx-auto">
            {/* Header with Navigation and Download */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
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

                <a 
                    href={pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm uppercase tracking-wider px-4 py-2 border transition-colors hover:opacity-80"
                    style={{ 
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-bg-primary)',
                        borderColor: 'var(--color-accent)'
                    }}
                >
                    Download PDF ↓
                </a>
            </div>

            {/* Resume Content */}
            <div className="pt-8">
                <HighlightHelper />
                <article 
                    className="prose prose-base sm:prose-lg w-full max-w-none blog-content"
                    style={{ 
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-text-primary)',
                        lineHeight: '1.6',
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
                    <Markdown>{content}</Markdown>
                </article>
            </div>

            {/* Bottom Action */}
            <div className="mt-12 pt-8 border-t flex justify-center" style={{ borderColor: 'var(--color-border)' }}>
                <a 
                    href={pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm uppercase tracking-wider no-underline hover:underline"
                    style={{ 
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-accent)' 
                    }}
                >
                    [Download PDF Version]
                </a>
            </div>

            {/* Reuse blog styles */}
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
                
                .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 {
                    font-family: var(--font-heading);
                    margin-top: 1.5em;
                    margin-bottom: 0.5em;
                    color: var(--color-text-primary);
                }

                .blog-content h1 { font-size: 2.5em; font-weight: 800; border-bottom: 2px solid var(--color-border); padding-bottom: 0.5em; }
                .blog-content h2 { font-size: 1.75em; font-weight: 700; border-bottom: 1px dashed var(--color-border); padding-bottom: 0.3em; }
                .blog-content h3 { font-size: 1.5em; font-weight: 600; }
                
                .blog-content p {
                    margin-bottom: 1em;
                    line-height: 1.7;
                }
                
                .blog-content ul, .blog-content ol {
                    margin-bottom: 1em;
                    padding-left: 1.5em;
                    list-style-type: disc;
                }
                
                .blog-content li {
                    margin-bottom: 0.3em;
                }

                .blog-content li::marker {
                    color: var(--color-accent);
                }
                
                .blog-content a {
                    color: var(--color-accent);
                    text-decoration: underline;
                    text-decoration-style: dashed;
                }
                
                .blog-content a:hover {
                    text-decoration-style: solid;
                }
            `}</style>
        </div>
    );
}
