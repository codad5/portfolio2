import { MouseEvent } from "react"
import { projectsDetails } from "./types"
import DefaultImage from '../assets/default.jpg'
import Link from "next/link"

export default function ProjectCard({ name, type, main_lang, links, tags = [], children, image = DefaultImage.src}: projectsDetails)
{
    const default_style_main = {
        background: "linear-gradient(to right bottom, rgba(89, 86, 86, 0.44), rgba(101, 89, 89, 0.81)), url('"+image ?? DefaultImage+"'))",
        color:'red',
        backgroundSize:image != (DefaultImage as unknown as string) ? 'contain' : 'cover'
    }
    return (
        <div className="w-[300px] min-h-[300px] bg-mainblue inline-block relative">
            {main_lang ? <span className="absolute top-0 right-0 p-2 bg-black text-white z-30">{main_lang}</span> : null }
            {type ? <span className="bg-black rounded-full px-2 text-white radius-4 absolute top-5 left-4 z-30">{type}</span> : null}
            <div className={`w-full  bg-cover bg-center relative h-[250px] bg-hero- bg-cover `} style={default_style_main}>
                <div className="w-full absolute bottom-0 p-4 text-white text-left">
                    <div className="w-full ">
                        <div>
                            <h4 className="inline-block text-2xl p-2 break-words"> {name} </h4>
                        </div>
                        <div>
                            {tags.map((key, index) => (
                                <span key={index} className="text-sm p-1 lowercase underline text-white hover:text-slate-700 ">
                                    #{key}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
                { links ?
                    <div className="w-full p-3 px-5 text-left flex">
                            {links.github ? (<Link className="inline-block w-1/2 h-full font-bold decoration-dotted  basis-full shrink-1 text-center underline text-lg" href={links.github}>Github</Link>) : null}
                            {links.website ? (<Link className="inline-block w-1/2 h-full font-bold decoration-dotted  basis-full shrink-1 text-center underline text-lg" href={links.website}>Website</Link>) : null}
                    </div> : null
                }
            <div className="w-full min-h-[50px]">
            {children ? <details className="w-full text-black h-max text-left px-4 py-3 bg-mainblue" >
                <summary>About</summary>
                <article className="p-4">
                    {children}
                </article>
            </details> : null}
            <div>

            </div>
            </div>
        </div>
    )
}