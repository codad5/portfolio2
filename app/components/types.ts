import { StaticImageData } from "next/image"

export type projectsDetails = {
    name: string,
    type: 'dev' | 'frontend' | 'backend' | 'cloud' | 'command-line' | 'fullstack' | 'chrome-ext' | 'game' | 'desktop' | 'mobile' | 'web' | 'other',
    tags: string[],
    main_lang?: string,
    image?: string | StaticImageData,
    links?: {
        github?: string,
        website?: string
    },
    children?: JSX.Element|string
}

export type contactsType = {
    label: string,
    value: string,
    link: string,
}

export type postsType = {
    slug: string,
    title: string,
    date: string,
    description: string,
    tags: string|string[]
    image?: string,
    published?: boolean
}