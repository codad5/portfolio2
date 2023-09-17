import { getPostContent, getPostMetadata, getPostsAndMetadata } from "@/app/helpers/post";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { postsType } from "@/app/components/types";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { notFound, usePathname, useRouter } from 'next/navigation'
import ShareButton from "@/app/components/shareButton";
import BlogPost from "@/app/components/BlogPost";
import 'highlight.js/styles/atom-one-dark-reasonable.css'


export const generateStaticParams = () => {
    const posts = getPostsAndMetadata();
    return posts.map((post) => ({
            slug: post.slug     
    }))
}

export async function generateMetadata({ params, searchParams } : { params:{slug: string}, searchParams : any }) : Promise<Metadata> {
    const postdata = getPostMetadata(params.slug)
    if(!postdata) return {};
    const { title, date, description, tags, image } = postdata
    return {
        title: `Codad5 - ${title}` ?? 'Chibueze Michael Aniezeofor - Codad5',
        description: description ?? 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exciting project.',
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
            telephone: true,
        },
        openGraph: {
            title: `Codad5 - ${title}` ?? 'Chibueze Michael Aniezeofor - Codad5',
            description: description ?? 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exciting project.',
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
            card: 'summary_large_image',
            site: '@codad5',
            description: description ?? 'Chibueze Michael Aniezeofor is a Nigerian based software developers and also a mechanical engineering student, i am open to job and also willing to work on exciting project.',
            title: `Codad5 - ${title}` ?? 'Chibueze Michael Aniezeofor - Codad5',
            creator: '@codad5_',
            images :  [image ?? 'https://pbs.twimg.com/profile_images/1538795825832374273/Dc1NUUr1_400x400.jpg'],
            creatorId: '1283149384872599553',
            siteId: '1283149384872599553',
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'standard',
                'max-snippet': -1,
            },
        },
    }
}

 const PostPage = ({params}:{params:any}) => {
    const {slug} = params;
    const postContents = getPostContent(slug);
    if(!postContents) notFound()
    const { content, data } = matter(postContents);
    const { title, date, image , tags, description} = data as postsType
    return (
        <div className="w-full text-left">
            <ShareButton title={title} description={description} />
            <BlogPost title={title} slug={slug} date={date} tags={tags} image={image} description={description}>
                {content}
            </BlogPost>
        </div>
    )
}


export default PostPage
