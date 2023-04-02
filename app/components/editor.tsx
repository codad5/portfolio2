"use client"

import { LegacyRef, RefObject, useEffect, useRef, useState } from "react"
import 'highlight.js/styles/default.css'
import Highlight from "react-highlight";
import markdown from "highlight.js/lib/languages/markdown"
import Markdown from "markdown-to-jsx";
import BlogPost from "./BlogPost";
import hljs from "highlight.js";
hljs.registerLanguage('markdown', markdown)
hljs.autoDetection("markdown")


export default function Editor(){
    const [isPreview, setPreview] = useState(false)
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("New Post");
    const [tags, setTag] = useState<string>("any, tag");
    const date = (new Date).toDateString()
    const EditorMain = useRef<HTMLElement>() as RefObject<HTMLElement>
    const TitleMain = useRef<HTMLElement>() as RefObject<HTMLHeadingElement>
    const TagMain = useRef<HTMLElement>() as RefObject<HTMLDivElement>
    useEffect(() => {
        hljs.initHighlighting();
    }, [isPreview])
    return (
        <>
        <div>
            <button className="px-4 py-2 bg-mainblue" onClick={() => {
                    if (EditorMain?.current?.innerText) setContent(() => `${EditorMain?.current?.innerText}`)
                    if(TitleMain?.current?.innerText) setTitle(() => `${TitleMain?.current?.innerText}`)
                    if(TagMain?.current?.innerText) setTag(() => `${TagMain?.current?.innerText}`)
                setPreview(old => !old)
            }}>
                    {isPreview ? 'code' : 'preview'}
            </button>
        </div>
            {
                isPreview ? 
                (
                    <BlogPost title={title} slug={title} date={date} tags={tags}  description={"description"}>
                        {content}
                    </BlogPost>
                ) :
                (
                        <>
                        <h1 className="text-3xl font-black py-3" contentEditable ref={TitleMain}>{title}</h1>
                        <div>Date : {date}</div>
                            {tags ? <div > Tags : <span ref={TagMain} contentEditable>{tags}</span></div> : ''}
                        <pre>
                            <code className="markdown break-words " contentEditable ref={EditorMain}>
                                {content}
                            </code>
                        </pre>
                        </>
                )
            }
        </>
    )
}