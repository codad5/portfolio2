import fs from 'fs';

export const getPosts = () => {
    const files = fs.readdirSync('posts')
    const markdownFiles = files.filter((fn) => fn.endsWith('.md'))
    const slugs = markdownFiles.map((fn) => fn.replace('.md', ''))
    return slugs
}


export const getPostContent = (slug: any) => {
    //get file contents
    return fs.readFileSync(`posts/${slug}.md`, 'utf-8')
}