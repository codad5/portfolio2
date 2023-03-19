import App from "./components/App";
import { getPosts, getPostsAndMetadata } from "./helpers/post";

const post = getPostsAndMetadata();


export default function Home() {
  return (
    <>
      <App posts={post} />
    </>
  )
}