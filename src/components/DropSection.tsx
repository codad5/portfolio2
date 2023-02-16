<<<<<<< HEAD
import { MouseEvent, useState } from 'react'
import {  isBrowser, isMobile } from 'react-device-detect';


function DropSection({ title, children, expanded = false, style = " ", shortcutSwitches}: { title: string, children: React.ReactNode, shortcutSwitches?: string[], expanded?:boolean, style?:string}) {
    const ELEMENT_ID = `Collapse${title}`
    const showHeroAuto = () => {
        let any_open = false;
        const accordion_bs = document.querySelectorAll('button.accordion-button') as NodeListOf<HTMLButtonElement>
        accordion_bs.forEach(e => {
            if(!e.classList.contains('collapsed')) any_open = true;
        })  
        if(!any_open) accordion_bs[0].click()
        setIsOpen(DropSectionIsOpen(title))
    }
    const DropSectionIsOpen = (title: string) => {
        return document.querySelector(`#btn_${title}`)?.classList.contains('collapsed') ?? false
    }
    const [isOpen, setIsOpen] = useState(!expanded)
    
    return (
        <section className={`accordion-item border bg-white border-gray-200 shrink-0`}>
            <h2 className="accordion-header mb-0 bg-mainblue sticky top-0 z-50" id={`headingOne${ELEMENT_ID}`}>
                <button className={`
        accordion-button
        collapsed  
        ${expanded ? '' : 'collapsed'}
=======
import { useState } from 'react'

function DropSection({ title , children, expanded = false }) {
    const [count, setCount] = useState(0)
    const ELEMENT_ID = `Collapse${title}`
    return (
        <section className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id={`headingOne${ELEMENT_ID}`}>
                <button className="
        accordion-button
        collapsed   
>>>>>>> db4b2c4 (error merge)
        relative
        flex
        items-center
        w-full
        py-4
        px-5
<<<<<<< HEAD
        text-base text-black text-left
        bg-mainblue
=======
        text-base text-gray-800 text-left
        bg-white
>>>>>>> db4b2c4 (error merge)
        border-0
        rounded-none
        transition
        focus:outline-none
<<<<<<< HEAD
        min-h-[10vh]
      `} type="button" id={`btn_${title}`} data-bs-toggle="collapse" data-bs-target={`#${ELEMENT_ID}`} aria-expanded={expanded}
                    aria-controls={`${ELEMENT_ID}`} onClick={e => showHeroAuto()}>
                    {title} <sub className='font-light text-xs ml-2'>{isBrowser && shortcutSwitches ? `Press ${shortcutSwitches.join(',')} to ${isOpen ? 'open' : 'close'}` : null}</sub>
=======
      " type="button" data-bs-toggle="collapse" data-bs-target={`#${ELEMENT_ID}`} aria-expanded={expanded}
                    aria-controls={`${ELEMENT_ID}`}>
                    {title}
>>>>>>> db4b2c4 (error merge)
                </button>
            </h2>
            <div id={ELEMENT_ID} className={`accordion-collapse collapse ${expanded ? 'show' : ''}`} aria-labelledby={`headingOne${ELEMENT_ID}`}
                data-bs-parent="#Main">
<<<<<<< HEAD
                <div className={`accordion-body  min-h-[50vh] ${style}`}>
=======
                <div className="accordion-body py-4 px-5">
>>>>>>> db4b2c4 (error merge)
                    {children}
                </div>
            </div>
        </section>
    )
}

export default DropSection
