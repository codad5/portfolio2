import { getPostContent, getPostsAndMetadata } from "@/app/helpers/post";
import Markdown from "markdown-to-jsx";


export const generateStaticParams = () => {
    const posts = getPostsAndMetadata();
    return posts.map((post) => ({
            slug: post.slug     
    }))
}
 const PostPage = ({params}) => {
    const {slug} = params;
     const content = getPostContent(slug)
    return (
        <div>
            <h1>Name : {slug}</h1>
            <Markdown>{content}</Markdown>
        </div>
    )
}


export default PostPage