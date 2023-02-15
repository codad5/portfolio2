export type projectsDetails = {
    name: string,
    type: 'dev' | 'frontend' | 'backend' | 'cloud' | 'command-line' | 'fullstack' ,
    tags: string[],
    main_lang ?: string,
    image?: string,
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