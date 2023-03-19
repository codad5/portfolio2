import { getPostContent } from "@/app/helpers/post";
import Markdown from "markdown-to-jsx";

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