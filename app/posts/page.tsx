import Link from "next/link";
import { getPostsAndMetadata } from "../helpers/post";

export default function PostLayout() {
    const posts = getPostsAndMetadata();
    return (
        <>
            {
                posts.length > 0 ? (
                    <>
                        
                        <div className='w-full p-4 text-center  '>
                            <ul className='list-disc w-full md:w-4/5 text-slate-700'>
                                {posts.filter(value => value.published).map((value, index) => (
                                    <li key={index} className='w-4/5 text-left border-1 py-4'>
                                        <div>
                                            <Link href={`posts/${value.slug}`} className=' text-4xl font-bold antialiased font-mono'>{value.title}</Link>
                                            <div className='text-sm'>Date: {value.date}</div>
                                            <div className='text-sm'>Tags: {value.tags}</div>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : <div className='w-full grid place-items-center h-[50vh]'>
                    <b className='text-3xl'> <h2> Coming Soon</h2></b>
                </div>
            }
        </>
    )
}