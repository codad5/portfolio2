import { getPostContent, getPostsAndMetadata } from "@/app/helpers/post";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { postsType } from "@/app/components/types";
import Link from "next/link";


export const generateStaticParams = () => {
    const posts = getPostsAndMetadata();
    return posts.map((post) => ({
            slug: post.slug     
    }))
}
 const PostPage = ({params}) => {
    const {slug} = params;
    const {content, data} = matter(getPostContent(slug));
    const { title, date, image , tags} = data as postsType
    return (
        <div className="w-full text-left">
            <Link href="/" className="px-4 py-2 bg-mainblue">Back</Link>
            <h1 className="text-3xl font-black py-3">{title ?? slug}</h1>
            <div>Date : {date}</div>
            {tags  ? <div> Tags : {tags}</div> : '' }
            {image ? 
            <div>

            </div> : ''}
            {/* tailwind topography article tag */}
            <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl w-full">  
            <Markdown>{content}</Markdown>
            </article>
        </div>
    )
}


export default PostPage