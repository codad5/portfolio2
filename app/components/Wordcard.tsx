import { Children } from "react";

export default function WorkCard({ title, timeline, position, children , href}: { title: string, timeline: string, position: string, children?: JSX.Element, href ?: string }){
    return (
        <div className="w-[80%] lg:max-w-[400px] text-left">
            <a  href={href} ><h3 className="text-xl font-black underline hover:text-red">{title}</h3></a>
            <h4 className="font-semibold italic">{position}</h4>
            <span>{timeline}</span>
            <div className="w-full px-5 py-3">
                {children}
            </div>
        </div>
    )
}