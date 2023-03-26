"use client"

import { RWebShare } from "react-web-share"
import { usePathname } from "next/navigation"


export default function ({title, description, url} : {title: string, description: string, url?: string}){
    let path = usePathname()
    let mainUrl = url ?? `https://codad5.me/${path}`
    return (
        <>
            <RWebShare data={{
                text: description,
                url: mainUrl,
                title: `Codad5 - ${title}`,
            }}>
                <button className="px-4 py-2 bg-mainblue">Share </button>
            </RWebShare>
        </>
    )
}