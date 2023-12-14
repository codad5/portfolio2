import { MouseEvent } from "react"
import { projectsDetails } from "./types"
import DefaultImage from '@/app/assets/default.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

export default function ProjectCard({ name, type, main_lang, links, tags = [], children, image = DefaultImage.src}: projectsDetails)
{
    const default_style_main = {
        background: "linear-gradient(to right bottom, rgba(89, 86, 86, 0.44), rgba(101, 89, 89, 0.81)), url('"+image ?? DefaultImage+"'))",
        color:'red',
        backgroundSize:image != (DefaultImage as unknown as string) ? 'contain' : 'cover'
    }
    return (
        <div className="flex flex-col gap-1.5">
							<div className="relative w-full border border-neutral-900 aspect-[1.5] overflow-hidden rounded-lg cursor-pointer">
								<img src={`${image}`} className="w-full h-full hover:scale-125 object-cover object-center transition-all" />
							</div>
							<h3 className="text-lg font-bold mt-1 leading-none">{name}</h3>
							<p className="text-sm">
								{children}
                            </p>
							<div className="flex items-center justify-between mt-auto">
								{main_lang ? <div className="w-max bg-neutral-900 text-neutral-500 text-[10px] font-medium px-2.5 py-1 rounded drop-shadow-md">{main_lang}</div> : <div />}
								<div className="flex gap-4 items-center lg:px-1">
									{links?.website ? (
										<a href={links.website} target="_blank" className="block w-max text-xs font-medium">
											<FontAwesomeIcon icon={faExternalLink} size="lg"/>
										</a>
									) : null}
									{links?.github ? (
										<a href={links.github} target="_blank" className="block w-max text-xs font-medium">
											<FontAwesomeIcon icon={faGithub} size="lg" />
										</a>
									) : null}
								</div>
							</div>
						</div>
    )
}