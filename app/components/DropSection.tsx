import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { MouseEvent, useState } from 'react'
import {  isBrowser, isMobile } from 'react-device-detect';


// function DropSection({ title, children, expanded = false, style = " ", shortcutSwitches}: { title: string, children: React.ReactNode, shortcutSwitches?: string[], expanded?:boolean, style?:string}) {
//     const ELEMENT_ID = `Collapse${title}`
//     const showHeroAuto = () => {
//         let any_open = false;
//         const accordion_bs = document.querySelectorAll('button.accordion-button') as NodeListOf<HTMLButtonElement>
//         accordion_bs.forEach(e => {
//             if(!e.classList.contains('collapsed')) any_open = true;
//         })  
//         if(!any_open) accordion_bs[0].click()
//         setIsOpen(DropSectionIsOpen(title))
//     }
//     const DropSectionIsOpen = (title: string) => {
//         return document.querySelector(`#btn_${title}`)?.classList.contains('collapsed') ?? false
//     }
//     const [isOpen, setIsOpen] = useState(!expanded)
    
//     return (
//         <section className={`accordion-item border bg-white border-gray-200 shrink-0`}>
//             <h2 className="accordion-header mb-0 bg-mainblue sticky top-0 z-50" id={`headingOne${ELEMENT_ID}`}>
//                 <button className={`
//         accordion-button
//         collapsed  
//         ${expanded ? '' : 'collapsed'}
//         relative
//         flex
//         items-center
//         w-full
//         py-4
//         px-5
//         text-base text-black text-left
//         bg-mainblue
//         border-0
//         rounded-none
//         transition
//         focus:outline-none
//         min-h-[10vh]
//       `} type="button" id={`btn_${title}`} data-bs-toggle="collapse" data-bs-target={`#${ELEMENT_ID}`} aria-expanded={expanded}
//                     aria-controls={`${ELEMENT_ID}`} onClick={e => showHeroAuto()}>
//                     {title} <sub className='font-light text-xs ml-2'>{isBrowser && shortcutSwitches ? `Press ${shortcutSwitches.join(',')} to ${isOpen ? 'open' : 'close'}` : null}</sub>
//                 </button>
//             </h2>
//             <div id={ELEMENT_ID} className={`accordion-collapse collapse ${expanded ? 'show' : ''}`} aria-labelledby={`headingOne${ELEMENT_ID}`}
//                 data-bs-parent="#Main">
//                 <div className={`accordion-body  min-h-[50vh] ${style}`}>
//                     {children}
//                 </div>
//             </div>
//         </section>
//     )
// }

function DropSection({ title, children, style,expanded = true, onClick = () => { }, shortcutSwitches }: { title: string, children: React.ReactNode, style?:string, expanded: boolean, onClick?: (e: MouseEvent<HTMLButtonElement>) => void, shortcutSwitches?: string[], }) {
    return (
        <section className={`accordion-item border bg-white border-gray-200 shrink-0`}>
            <Accordion open={expanded} className="border-0">
                <AccordionHeader onClick={(e) => onClick(e)} className="mb-0 bg-mainblue sticky top-0 z-50">
                    <button className='relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-black text-left
        bg-mainblue
        border-0
        rounded-none       transition
     focus:outline-none
      min-h-[10vh]'>{title}</button> <sub className='font-light text-xs ml-2'>{isBrowser && shortcutSwitches ? `Press ${shortcutSwitches.join(',')} to ${expanded ? 'open' : 'close'}` : null}</sub>
                </AccordionHeader>
                <AccordionBody className={`accordion-body  p-0 m-0 min-h-[50vh] ${style}`}>
                    {children}
                </AccordionBody>
            </Accordion>
        </section>
    )
}
export default DropSection
