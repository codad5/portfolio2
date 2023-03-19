import { StaticImageData } from "next/image"

export type projectsDetails = {
    name: string,
    type: 'dev' | 'frontend' | 'backend' | 'cloud' | 'command-line' | 'fullstack' | 'chrome-ext',
    tags: string[],
    main_lang ?: string,
    image?: string | StaticImageData,
    links ?: {
        github ?: string,
        website ?: string
    },
    children ?: JSX.Element
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
    tags: string[]
}