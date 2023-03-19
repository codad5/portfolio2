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
    
    return markdownFiles.map((fn) => {
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


export const getPostContent = (slug: any) => {
    //get file contents
    return fs.readFileSync(`posts/${slug}.md`, 'utf-8')
}