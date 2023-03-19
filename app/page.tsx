import App from "./components/App";
import { getPosts } from "./helpers/post";

const post = getPosts();


export default function Home() {
  return (
    <>
      <App posts={post} />
    </>
  )
}