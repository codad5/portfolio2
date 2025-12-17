'use client';
import Markdown from "markdown-to-jsx";
import dynamic from "next/dynamic";

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

})
{

    return (
        <>
            <h1 className="text-3xl font-black py-3">{title ?? slug}</h1>
            <HighlightHelper />
            <div>Date : {date}</div>
            {tags ? <div> Tags : {tags}</div> : ''}
            {image ?
                // <div className="">
                // a div to hold the image with padding
                <div className="w-full max-h-80 object-scale-down p-4">
                    <img src={image} alt={`${tags} ${description}`} className="w-full max-h-80 object-scale-down" />
                </div> : ''}
            {/* tailwind topography article tag */}
            <article className="prose prose-base prose-zinc sm:prose lg:prose-lg xl:prose-xl w-full">
                <Markdown>{children}</Markdown>
            </article>
        </>
    )
}