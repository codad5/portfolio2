import { Children } from "react";

export default function WorkCard({ title, timeline, position, children , href}: { title: string, timeline: string, position: string, children?: JSX.Element, href ?: string }){
    return (
        <div className="w-[80%] text-left">
            <a  href={href} ><h5 className="text-xl font-black underline hover:text-red">{title}</h5></a>
            <h6 className="font-semibold italic">{position}</h6>
            <span>{timeline}</span>
            <div className="w-full px-5 py-3">
                {children}
            </div>
        </div>
    )
}