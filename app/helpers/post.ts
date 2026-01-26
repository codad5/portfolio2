import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postsType } from '../components/types';

const POSTS_PATH = path.join(process.cwd(), 'posts');

export const getPosts = () => {
    if (!fs.existsSync(POSTS_PATH)) return []
    const files = fs.readdirSync(POSTS_PATH)
    const markdownFiles = files.filter((fn) => fn.endsWith('.md'))
    const slugs = markdownFiles.map((fn) => fn.replace('.md', ''))
    return slugs
}

export const getPostsAndMetadata = () : postsType[] => {
    if (!fs.existsSync(POSTS_PATH)) return []
    const files = fs.readdirSync(POSTS_PATH)
    const markdownFiles = files.filter((fn) => fn.endsWith('.md'))
    
    return markdownFiles
    .map((fn) => {
        const fileContent = fs.readFileSync(path.join(POSTS_PATH, fn), 'utf-8')
        const { data } = matter(fileContent)
        return {
            slug: fn.replace('.md', ''),
            title: data.title,
            date: data.date,
            description: data.description,
            tags: data.tags,
            image: data.image,
            published: [false, 'false'].includes(data.published) ? false : true
        }
    })
    // Sort by date from frontmatter (newest first)
    .sort((a, b) => {
        const aDate = a.date ? new Date(a.date).getTime() : 0
        const bDate = b.date ? new Date(b.date).getTime() : 0
        return bDate - aDate
    })
    
}


export const getPostMetadata = (slug : string): postsType|false => {
    const filePath = path.join(POSTS_PATH, `${slug}.md`);
    if (!fs.existsSync(filePath)) return false;
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    return {
        slug: slug.replace('.md', ''),
        title: data.title,
        date: data.date,
        description: data.description ?? content.slice(0, 60),
        tags: data.tags,
        image: data.image
    }
}


export const getPostContent = (slug: any) => {
    const filePath = path.join(POSTS_PATH, `${slug}.md`);
    return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf-8') : null;
}