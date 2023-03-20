import { getPostContent, getPostMetadata, getPostsAndMetadata } from "@/app/helpers/post";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { postsType } from "@/app/components/types";
import Link from "next/link";
import { Metadata } from "next";


export const generateStaticParams = () => {
    const posts = getPostsAndMetadata();
    return posts.map((post) => ({
            slug: post.slug     
    }))
}

export async function generateMetadata({ params, searchParams } : { params:{slug: string}, searchParams : any }) : Promise<Metadata> {
    const { title, date, description , tags, image} = getPostMetadata(params.slug)
    return {
        title: `Codad5 - ${title}` ?? 'Chibueze Michael Aniezeofor - Codad5',
        description: description ?? 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exicting project.',
        generator: 'Next.js',
        applicationName: 'Codad5',
        referrer: 'origin-when-cross-origin',
        keywords: tags ?? ['codad5', 'CHIBUEZE MICHAEL ANIEZEOFOR', 'Software Developer', 'Engineer', 'PHP', 'NODE', 'LARAVEL', 'REACT', 'NEXTJS', 'VUEJS', 'ANGULAR', 'MECHANICAL ENGINEERING', 'Next.js', 'React', 'JavaScript', 'WEB DEVELOPER', 'WEB DESIGNER', 'GRAPHIC DESIGNER', 'UI/UX DESIGNER', 'MOBILE APP DEVELOPER', 'MOBILE'],
        authors: [{ name: 'Chibueze Michael Aniezeofor', url: 'https://codad5.me' }],
        // colorScheme: 'dark',
        creator: 'Chibueze Michael Aniezeofor',
        publisher: 'Chibueze Michael Aniezeofor',
        alternates: {},
        formatDetection: {
            email: true,
            address: false,
            telephone: false,
        },
        openGraph: {
            title: `Codad5 - ${title}` ?? 'Chibueze Michael Aniezeofor - Codad5',
            description: description ?? 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exicting project.',
            url: 'https://codad5.me',
            siteName: 'Codad5: A Software Enginner',
            phoneNumbers: ['+234 814 257 2488'],
            publishedTime: date,
            authors: ['Chibueze Michael Aniezeofor', 'codad5'],
            emails: ['aniezeoformic@gmail.com'],
            images: [
                {
                    url: image ?? 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
                    width: 800,
                    alt: 'Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE',
                    height: 600,
                },
                {
                    url: image ?? 'https://avatars.githubusercontent.com/u/66634814?v=41',
                    width: 1800,
                    height: 1600,
                    alt: 'Chibueze Michael Aniezeofor | Software Developer | Engineer | PHP | NODE',
                },
            ],
            locale: 'en-US',
            type: 'article',
        },
        twitter: {
            card: 'app',
            site: '@codad5',
            description: description ?? 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exicting project.',
            title: `Codad5 - ${title}` ?? 'Chibueze Michael Aniezeofor - Codad5',
            creator: '@codad5_',
            images : [ image ?? 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg'],
            creatorId: '1283149384872599553',
            app: {
                name: 'Codad5',
                id: {
                    iphone: 'twitter://user?screen_name=codad5_',
                    ipad: 'twitter://user?screen_name=codad5_',
                    googleplay: 'twitter://user?screen_name=codad5_',
                },
            },
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        icons: {
            icon: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
            shortcut: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
            apple: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg',
            },
        },
    }
}

 const PostPage = ({params}:{params:any}) => {
    const {slug} = params;
    const {content, data} = matter(getPostContent(slug));
    const { title, date, image , tags} = data as postsType
    return (
        <div className="w-full text-left">
            
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