import fs from 'fs';
import matter from 'gray-matter';
import { postsType } from '../components/types';
export const getPosts = () => {
    const files = fs.readdirSync('posts')
    const markdownFiles = files.filter((fn) => fn.endsWith('.md'))
    const slugs = markdownFiles.map((fn) => fn.replace('.md', ''))
    return slugs
}

export const getPostsAndMetadata = () : postsType[] => {
    const files = fs.readdirSync('posts')
    const markdownFiles = files.filter((fn) => fn.endsWith('.md'))
    
    return markdownFiles
    .sort((a, b) => {
        const aTime = fs.statSync(`posts/${a}`).mtime.getTime()
        const bTime = fs.statSync(`posts/${b}`).mtime.getTime()
        // return bTime - aTime
        // the newest post will be first
        return aTime - bTime
    })
    .map((fn) => {
        const fileContent = fs.readFileSync(`posts/${fn}`, 'utf-8')
        const { data } = matter(fileContent)
        return {
            slug: fn.replace('.md', ''),
            title: data.title,
            date: data.date,
            description: data.description,
            tags: data.tags,
            image: data.image
        }
    })
}


export const getPostMetadata = (slug : string): postsType|false => {
    if (!fs.existsSync(`posts/${slug}.md`)) return false;
    const fileContent = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
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
    //get file contents
    
    return fs.existsSync(`posts/${slug}.md`) ? fs.readFileSync(`posts/${slug}.md`, 'utf-8') : null;
}